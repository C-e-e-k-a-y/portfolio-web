import { ChevronDown } from 'lucide-react';

export default function ScrollDownIndicator() {
    return (
        <a
            href="#about"
            aria-label="Scroll down"
            className="inline-flex flex-col items-center gap-1 text-slate-400 hover:text-blue-400 transition-colors"
        >
            <span className="font-mono text-xs tracking-wider">SCROLL DOWN</span>
            <ChevronDown className="h-6 w-6 animate-bounce text-blue-500" />
        </a>
    );
}