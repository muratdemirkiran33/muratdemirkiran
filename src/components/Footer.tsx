import React from 'react';
import { GENERAL_INFO } from '@/lib/data';
import { GitFork, Star } from 'lucide-react';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

const Footer = () => {
    const [stats, setStats] = React.useState<RepoStats>({ stargazers_count: 0, forks_count: 0 });

    React.useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/Murat/portfolio-2.0');
                const data = await response.json();
                setStats({
                    stargazers_count: data.stargazers_count,
                    forks_count: data.forks_count,
                });
            } catch (error) {
                console.error('Failed to fetch repo stats:', error);
            }
        };

        fetchStats();
    }, []);

    const { stargazers_count, forks_count } = stats;

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="relative text-2xl sm:text-4xl font-anton inline-block mt-5 mb-10 transition-all duration-500 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent hover:bg-left before:absolute before:-bottom-1 before:left-0 before:w-full before:h-1 before:bg-primary before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-700"
                >
                    {GENERAL_INFO.email}
                </a>


            </div>
        </footer>
    );
};

export default Footer;
