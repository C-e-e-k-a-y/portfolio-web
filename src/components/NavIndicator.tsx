import { ChevronLeft } from 'lucide-react';

export default function NavIndicator() {
    return (
        <span
            aria-label="Scroll left"
            className="inline-flex flex-col-reverse items-end gap-1 text-blue-400 lg:hidden"
        >
            <span className="font-mono text-sm md:text-md w-15 tracking-wider">Swipe Left to Navigate</span>

            <ChevronLeft className="w-6 h-6 text-slate-400 animate-bounce-left" />
        </span>
    )
}

