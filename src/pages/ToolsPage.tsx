import { Link } from 'react-router-dom';

const tools = [
    {
        slug: 'mermaid-to-figma',
        title: 'Mermaid SVG → Figma',
        description: 'Mermaid diyagramlarını Figma\'ya aktarmak için PDF veya PNG\'ye çevir.',
        emoji: '📊',
    },
];

export default function ToolsPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Tools</h1>
                <p className="text-lg text-neutral-400 mb-12">
                    Geliştirdiğim küçük ama kullanışlı araçlar.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                    {tools.map((tool) => (
                        <Link
                            key={tool.slug}
                            to={`/tools/${tool.slug}`}
                            className="group block p-6 bg-neutral-900 border border-neutral-800 rounded-2xl hover:border-neutral-600 transition-all duration-300"
                        >
                            <div className="text-4xl mb-4">{tool.emoji}</div>
                            <h2 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                                {tool.title}
                            </h2>
                            <p className="text-neutral-400 text-sm">
                                {tool.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
