import { useState, useEffect, useRef, type ReactElement, cloneElement } from 'react';
import { House, User, Code2, FolderGit2, Headset } from 'lucide-react';

interface NavItem {
    id: string;
    label: string;
    icon: ReactElement<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
    { id: 'home', label: 'Home', icon: <House /> },
    { id: 'about', label: 'About', icon: <User /> },
    { id: 'skills', label: 'Skills', icon: <Code2 /> },
    { id: 'projects', label: 'Projects', icon: <FolderGit2 /> },
    { id: 'contact', label: 'Contact', icon: <Headset /> },
];

export default function Navigation() {
    const [activeSection, setActiveSection] = useState('home');
    const [showLabel, setShowLabel] = useState(false);
    const [isMobileVisible, setIsMobileVisible] = useState(false);

    const touchStartRef = useRef<number | null>(null);
    const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Helper to trigger temporary 4s visibility for mobile
    const triggerMobileNav = () => {
        setIsMobileVisible(true);
        setShowLabel(true);

        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);

        hideTimerRef.current = setTimeout(() => {
            setIsMobileVisible(false);
            setShowLabel(false);
        }, 2000);
    };

    // 1. Handle Active Section Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
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

    // 2. Right-Edge Touch Swipe Detection for Mobile/Tablet
    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            const touchX = e.touches[0].clientX;
            const windowWidth = window.innerWidth;

            // Only detect swipes originating from the rightmost 50px of the screen
            if (touchX > windowWidth - 50) {
                touchStartRef.current = touchX;
            } else {
                touchStartRef.current = null;
            }
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (touchStartRef.current === null) return;

            const touchEndX = e.changedTouches[0].clientX;
            const swipeDistance = touchStartRef.current - touchEndX;

            // Swiped left by at least 30px from the right edge
            if (swipeDistance > 30) {
                triggerMobileNav();
            }

            touchStartRef.current = null;
        };

        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        };
    }, []);

    return (
        <aside
            className={`fixed right-0 lg:right-2 z-50 flex flex-col items-end justify-center space-y-5 bg-grey-900/10 py-5 px-2 h-full backdrop-blur-md transition-all duration-500 lg:backdrop-blur-none lg:bg-transparent ease-out ${
                /* On desktop (lg:), it's always visible. On mobile/tablet (<lg), it slides in/out */
                isMobileVisible
                    ? 'translate-x-0 opacity-100 pointer-events-auto'
                    : 'max-lg:translate-x-16 max-lg:opacity-0 max-lg:pointer-events-none lg:translate-x-0 lg:opacity-100'
                }`}
        >
            {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;

                return (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        aria-label={item.label}
                        onClick={() => triggerMobileNav()} // Resets the 4s timer if tapped
                        className="group flex items-center space-x-5 lg:space-x-3 focus:outline-none"
                    >
                        {/* Label */}
                        <span
                            className={`font-mono text-md tracking-wide transition-all duration-300 ${isActive && showLabel
                                ? 'opacity-100 text-slate-300 translate-x-0'
                                : 'opacity-100 lg:opacity-0 group-hover:opacity-100 text-slate-400 translate-x-2 group-hover:translate-x-0'
                                }`}
                        >
                            {item.label}
                        </span>

                        {/* Dot Indicator */}
                        <div className="relative flex items-center justify-center w-5 h-5">
                            {isActive ? (
                                cloneElement(item.icon, {
                                    className: 'w-5 h-5 text-indigo-500 bg-clip-text drop-shadow-[0_0_12px_#6366f1] transition-all duration-300 scale-110',
                                })
                            ) : (
                                cloneElement(item.icon, {
                                    className: 'w-5 h-5 text-slate-400 group-hover:text-slate-300 transition-all duration-300',
                                })
                            )}
                        </div>
                    </a>
                );
            })}
        </aside>
    );
}