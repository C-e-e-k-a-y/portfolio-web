import { useState, useEffect } from 'react';

const WORDS = ['Web Developer', 'Software Engineer', 'AI Enthusiast'];

export default function HeroTitle() {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (subIndex === WORDS[index].length + 1 && !reverse) {
            const timeout = setTimeout(() => setReverse(true), 1500); // Wait before deleting
            return () => clearTimeout(timeout);
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % WORDS.length); // Move to next word
            return;
        }

        const timeout = setTimeout(
            () => {
                setSubIndex((prev) => prev + (reverse ? -1 : 1));
            },
            reverse ? 50 : 100 // Speed: typing vs deleting
        );

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    return (
        <h1 className="text-[clamp(1.5rem,6vw,2.5rem)] mt-2 font-semibold font-mono">
            <span>
                {WORDS[index].substring(0, subIndex)}
            </span>
            {/* Blinking Cursor */}
            <span className="animate-blink">|</span>
        </h1>
    );
}