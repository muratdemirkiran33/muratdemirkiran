import { useState, useRef } from 'react';

export default function MermaidToFigma() {
    const [convertedSvg, setConvertedSvg] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const previewRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // SVG'yi Figma uyumlu formata çevir
    const convertToFigmaCompatible = (svgString: string): string => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgString, 'image/svg+xml');
        const svg = doc.querySelector('svg');
        
        if (!svg) return svgString;

        // 1. foreignObject elementlerini kaldır (Figma desteklemiyor)
        const foreignObjects = svg.querySelectorAll('foreignObject');
        foreignObjects.forEach(fo => {
            // foreignObject içindeki text'i normal text'e çevir
            const textContent = fo.textContent?.trim() || '';
            if (textContent) {
                const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                const x = fo.getAttribute('x') || '0';
                const y = fo.getAttribute('y') || '0';
                const width = fo.getAttribute('width') || '100';
                text.setAttribute('x', String(parseFloat(x) + parseFloat(width) / 2));
                text.setAttribute('y', String(parseFloat(y) + 20));
                text.setAttribute('text-anchor', 'middle');
                text.setAttribute('font-family', 'Arial, sans-serif');
                text.setAttribute('font-size', '14');
                text.setAttribute('fill', '#333');
                text.textContent = textContent;
                fo.parentNode?.replaceChild(text, fo);
            } else {
                fo.remove();
            }
        });

        // 2. Style tag'lerini inline style'a çevir
        const styleElements = svg.querySelectorAll('style');
        const styleRules: Map<string, Record<string, string>> = new Map();
        
        styleElements.forEach(styleEl => {
            const cssText = styleEl.textContent || '';
            // CSS kurallarını parse et
            const ruleRegex = /([^{]+)\{([^}]+)\}/g;
            let match;
            while ((match = ruleRegex.exec(cssText)) !== null) {
                const selector = match[1].trim();
                const properties = match[2].trim();
                const propsMap: Record<string, string> = {};
                properties.split(';').forEach(prop => {
                    const [key, value] = prop.split(':').map(s => s.trim());
                    if (key && value) {
                        propsMap[key] = value;
                    }
                });
                styleRules.set(selector, { ...styleRules.get(selector), ...propsMap });
            }
            styleEl.remove();
        });

        // CSS kurallarını elementlere uygula
        styleRules.forEach((props, selector) => {
            try {
                const elements = svg.querySelectorAll(selector);
                elements.forEach(el => {
                    Object.entries(props).forEach(([key, value]) => {
                        (el as HTMLElement).style.setProperty(key, value);
                    });
                });
            } catch {
                // Geçersiz selector'ları atla
            }
        });

        // 3. Tüm text elementlerine font-family ekle
        const textElements = svg.querySelectorAll('text, tspan');
        textElements.forEach(text => {
            if (!text.getAttribute('font-family') && !(text as HTMLElement).style.fontFamily) {
                text.setAttribute('font-family', 'Arial, sans-serif');
            }
        });

        // 4. viewBox yoksa ekle
        if (!svg.getAttribute('viewBox')) {
            const width = svg.getAttribute('width') || '800';
            const height = svg.getAttribute('height') || '600';
            svg.setAttribute('viewBox', `0 0 ${parseFloat(width)} ${parseFloat(height)}`);
        }

        // 5. xmlns attribute'u ekle
        if (!svg.getAttribute('xmlns')) {
            svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        }

        // 6. marker-end, marker-start gibi attribute'ları kontrol et
        // Figma bazı marker'ları desteklemiyor, path olarak çiz
        
        // 7. Nested SVG'leri düzelt
        const nestedSvgs = svg.querySelectorAll('svg svg');
        nestedSvgs.forEach(nested => {
            const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            const x = nested.getAttribute('x') || '0';
            const y = nested.getAttribute('y') || '0';
            g.setAttribute('transform', `translate(${x}, ${y})`);
            while (nested.firstChild) {
                g.appendChild(nested.firstChild);
            }
            nested.parentNode?.replaceChild(g, nested);
        });

        // 8. Class attribute'larını kaldır (artık inline style var)
        const allElements = svg.querySelectorAll('*');
        allElements.forEach(el => {
            el.removeAttribute('class');
        });

        return new XMLSerializer().serializeToString(svg);
    };

    const loadSvg = (content: string, name: string) => {
        setFileName(name);
        const converted = convertToFigmaCompatible(content);
        setConvertedSvg(converted);
        setStatus('✅ SVG yüklendi ve Figma formatına çevrildi');
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const content = event.target?.result as string;
            loadSvg(content, file.name);
        };
        reader.readAsText(file);
    };

    const handlePasteFromClipboard = async () => {
        try {
            const text = await navigator.clipboard.readText();
            if (text.includes('<svg') && text.includes('</svg>')) {
                loadSvg(text, 'clipboard.svg');
            } else {
                setStatus('❌ Clipboard\'da geçerli SVG bulunamadı');
            }
        } catch {
            setStatus('❌ Clipboard erişimi reddedildi');
        }
    };

    const handleDownloadSvg = () => {
        if (!convertedSvg) return;
        
        const blob = new Blob([convertedSvg], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName.replace('.svg', '') + '_figma.svg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        setStatus('✅ Figma uyumlu SVG indirildi');
    };

    const handleCopyToClipboard = async () => {
        if (!convertedSvg) return;
        
        try {
            await navigator.clipboard.writeText(convertedSvg);
            setStatus('✅ SVG clipboard\'a kopyalandı');
        } catch {
            setStatus('❌ Kopyalama başarısız');
        }
    };

    const handlePngDownload = () => {
        if (!previewRef.current) return;
        
        const svgElement = previewRef.current.querySelector('svg');
        if (!svgElement) return;

        const svgData = new XMLSerializer().serializeToString(svgElement);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();

        const scale = 3; // Daha yüksek kalite için 3x
        const viewBox = svgElement.viewBox.baseVal;
        const width = viewBox.width || svgElement.getBoundingClientRect().width;
        const height = viewBox.height || svgElement.getBoundingClientRect().height;

        canvas.width = width * scale;
        canvas.height = height * scale;

        const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);

        img.onload = function () {
            ctx?.scale(scale, scale);
            ctx?.drawImage(img, 0, 0);

            const pngUrl = canvas.toDataURL('image/png');
            const downloadLink = document.createElement('a');
            downloadLink.href = pngUrl;
            downloadLink.download = fileName.replace('.svg', '') + '_figma.png';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            URL.revokeObjectURL(url);
            setStatus('✅ PNG indirildi (3x çözünürlük)');
        };
        img.src = url;
    };

    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                    Mermaid SVG → Figma Çevirici
                </h1>
                <p className="text-neutral-400 mb-8">
                    Mermaid'den aldığın SVG'yi Figma uyumlu formata çevirir.
                    <br />
                    <span className="text-neutral-500 text-sm">
                        foreignObject, CSS class'ları ve stil tag'leri inline style'a çevrilir.
                    </span>
                </p>

                {/* Controls */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 mb-8">
                    {/* Input Section */}
                    <div className="mb-6">
                        <h3 className="text-sm font-medium text-neutral-400 mb-3">📥 SVG Yükle</h3>
                        <div className="flex flex-wrap gap-3">
                            {/* File Input */}
                            <label className="flex-1 min-w-[200px] cursor-pointer">
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept=".svg"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                                <div className="border-2 border-dashed border-neutral-700 rounded-xl p-6 text-center hover:border-neutral-500 transition-colors h-full flex flex-col items-center justify-center">
                                    <span className="text-3xl mb-2">📁</span>
                                    <span className="text-neutral-300 font-medium text-sm">
                                        Dosya Seç
                                    </span>
                                </div>
                            </label>

                            {/* Clipboard Input */}
                            <button
                                onClick={handlePasteFromClipboard}
                                className="flex-1 min-w-[200px] border-2 border-dashed border-neutral-700 rounded-xl p-6 text-center hover:border-neutral-500 transition-colors cursor-pointer"
                            >
                                <span className="text-3xl mb-2 block">📋</span>
                                <span className="text-neutral-300 font-medium text-sm">
                                    Clipboard'dan Yapıştır
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Status */}
                    {status && (
                        <p className="text-sm text-neutral-400 mb-4 p-3 bg-neutral-800 rounded-lg">
                            {status}
                        </p>
                    )}

                    {/* Output Section */}
                    {convertedSvg && (
                        <div>
                            <h3 className="text-sm font-medium text-neutral-400 mb-3">📤 Figma Uyumlu SVG İndir</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                <button
                                    onClick={handleDownloadSvg}
                                    className="bg-white text-black font-semibold py-3 px-4 rounded-xl hover:bg-neutral-200 transition-colors cursor-pointer text-sm"
                                >
                                    💾 SVG İndir
                                </button>
                                <button
                                    onClick={handleCopyToClipboard}
                                    className="bg-neutral-700 text-white font-semibold py-3 px-4 rounded-xl hover:bg-neutral-600 transition-colors cursor-pointer text-sm"
                                >
                                    📋 SVG Kopyala
                                </button>
                                <button
                                    onClick={handlePngDownload}
                                    className="bg-emerald-600 text-white font-semibold py-3 px-4 rounded-xl hover:bg-emerald-500 transition-colors cursor-pointer text-sm"
                                >
                                    🖼️ PNG İndir (3x)
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Preview */}
                {convertedSvg && (
                    <div>
                        <h3 className="text-sm font-medium text-neutral-400 mb-3">👁️ Önizleme (Dönüştürülmüş SVG)</h3>
                        <div className="bg-white rounded-2xl p-6 overflow-auto">
                            <div
                                ref={previewRef}
                                className="[&_svg]:w-full [&_svg]:h-auto [&_svg]:max-w-full"
                                dangerouslySetInnerHTML={{ __html: convertedSvg }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}