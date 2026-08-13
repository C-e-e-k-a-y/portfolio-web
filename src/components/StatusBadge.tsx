export default function StatusBadge() {
    return (
        <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-800/80 bg-slate-950/60 px-4 py-1.5 backdrop-blur-md shadow-sm">
            {/* Animated Ping / Glowing Dot Container */}
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                {/* Pulsing Outer Aura */}
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>

                {/* Solid Inner Dot with Glow */}
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
            </span>

            {/* Monospace Label Text */}
            <span className="font-mono text-md font-medium text-slate-300 tracking-wide">
                Available for work
            </span>
        </div>
    );
}