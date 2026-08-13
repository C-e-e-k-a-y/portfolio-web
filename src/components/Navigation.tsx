import { useState, useEffect } from 'react';

interface NavItem {
    id: string;
    label: string;
}

const NAV_ITEMS: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
    const [activeSection, setActiveSection] = useState('home');
    const [showLabel, setShowLabel] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);

                        // Show label immediately when active section changes
                        setShowLabel(true);

                        // Hide label after 2 seconds
                        const timer = setTimeout(() => {
                            setShowLabel(false);
                        }, 2000);

                        return () => clearTimeout(timer);
                    }
                });
            },
            { threshold: 0.5 }
        );

        NAV_ITEMS.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end space-y-5">
            {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;

                return (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        aria-label={item.label}
                        className="group flex items-center space-x-3 focus:outline-none"
                    >
                        {/* Text Label - Shows for 2s on active OR on hover */}
                        <span
                            className={`font-mono text-md tracking-wide transition-all duration-300 ${isActive && showLabel
                                ? 'opacity-100 text-slate-300 translate-x-0'
                                : 'opacity-0 group-hover:opacity-100 text-slate-400 translate-x-2 group-hover:translate-x-0'
                                }`}
                        >
                            {item.label}
                        </span>

                        {/* Dot Indicator */}
                        <div className="relative flex items-center justify-center w-5 h-5">
                            {isActive ? (
                                <span className="w-3.5 h-3.5 rounded-full bg-indigo-500 shadow-[0_0_12px_#6366f1] transition-all duration-300 scale-110" />
                            ) : (
                                <span className="w-3.5 h-3.5 rounded-full border-2 border-slate-600/80 group-hover:border-slate-300 transition-all duration-300" />
                            )}
                        </div>
                    </a>
                );
            })}
        </aside>
    );
}