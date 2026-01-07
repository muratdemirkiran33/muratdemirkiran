import { useState, useRef } from 'react';

export default function MermaidToFigma() {
    const [svgContent, setSvgContent] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string>('');
    const previewRef = useRef<HTMLDivElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const content = event.target?.result as string;
            setSvgContent(content);
            setFileName(file.name);
        };
        reader.readAsText(file);
    };

    const handlePrint = () => {
        if (!previewRef.current) return;
        
        const printWindow = window.open('', '_blank');
        if (!printWindow) return;

        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Mermaid SVG</title>
                <style>
                    body { margin: 0; padding: 20px; }
                    svg { width: 100%; height: auto; }
                    @media print {
                        @page { margin: 0; size: auto; }
                    }
                </style>
            </head>
            <body>
                ${svgContent}
            </body>
            </html>
        `);
        printWindow.document.close();
        
        setTimeout(() => {
            printWindow.print();
        }, 250);
    };

    const handlePngDownload = () => {
        if (!previewRef.current) return;
        
        const svgElement = previewRef.current.querySelector('svg');
        if (!svgElement) return;

        const svgData = new XMLSerializer().serializeToString(svgElement);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();

        const scale = 2;
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
            downloadLink.download = 'mermaid_figma_ready.png';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            URL.revokeObjectURL(url);
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
                    Mermaid SVG dosyanı seç. "Figma için PDF" butonuna basınca açılan pencerede{' '}
                    <strong className="text-white">Hedef: PDF Olarak Kaydet</strong> seçeneğini seç.
                </p>

                {/* Controls */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 mb-8">
                    {/* File Input */}
                    <label className="block cursor-pointer mb-6">
                        <input
                            type="file"
                            accept=".svg"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                        <div className="border-2 border-dashed border-neutral-700 rounded-xl p-8 text-center hover:border-neutral-500 transition-colors">
                            <span className="text-4xl mb-3 block">📁</span>
                            <span className="text-neutral-300 font-medium">
                                SVG Dosyası Seç
                            </span>
                        </div>
                    </label>

                    {/* Status */}
                    {fileName && (
                        <p className="text-sm text-neutral-500 mb-4">
                            Dosya yüklendi: <span className="text-neutral-300">{fileName}</span>
                        </p>
                    )}

                    {/* Action Buttons */}
                    {svgContent && (
                        <div className="flex flex-wrap gap-3">
                            <button
                                onClick={handlePrint}
                                className="flex-1 min-w-[200px] bg-white text-black font-semibold py-3 px-6 rounded-xl hover:bg-neutral-200 transition-colors cursor-pointer"
                            >
                                📄 Figma İçin PDF Olarak Kaydet
                            </button>
                            <button
                                onClick={handlePngDownload}
                                className="flex-1 min-w-[200px] bg-emerald-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-emerald-500 transition-colors cursor-pointer"
                            >
                                🖼️ Yüksek Kalite PNG İndir
                            </button>
                        </div>
                    )}
                </div>

                {/* Preview */}
                {svgContent && (
                    <div className="bg-white rounded-2xl p-6 overflow-auto">
                        <div
                            ref={previewRef}
                            className="[&_svg]:w-full [&_svg]:h-auto"
                            dangerouslySetInnerHTML={{ __html: svgContent }}
                        />
                    </div>
                )}
            </div>
        </main>
    );
}
