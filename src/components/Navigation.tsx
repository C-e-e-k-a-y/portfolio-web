import { useState, useEffect, useRef } from 'react';

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
        }, 4000);
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
            className={`fixed right-0 z-50 flex flex-col items-end justify-center space-y-5 bg-grey-900/10 py-5 px-2 h-full backdrop-blur-md transition-all duration-500 lg:backdrop-blur-none lg:bg-transparent ease-out ${
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
                        className="group flex items-center space-x-3 focus:outline-none"
                    >
                        {/* Label */}
                        <span
                            className={`font-mono text-sm tracking-wide transition-all duration-300 ${isActive && showLabel
                                ? 'opacity-100 text-slate-300 translate-x-0'
                                : 'opacity-100 lg:opacity-0 group-hover:opacity-100 text-slate-400 translate-x-2 group-hover:translate-x-0'
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