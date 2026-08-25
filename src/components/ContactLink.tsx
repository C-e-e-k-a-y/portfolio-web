import { type ReactElement, cloneElement } from 'react';

interface ContactLinkProps {
  address: string;
  svg: ReactElement<{ className?: string }>;
}

export default function ContactLink({ address, svg }: ContactLinkProps) {
  return (
    <a href={`${address}`} className={`text-blue-500 hover:text-blue-700 rounded-full p-2 bg-gray-800 hover:bg-gray-700`} target="_blank" rel="noopener noreferrer" draggable={false}>
      {cloneElement(svg, { className: "w-6 h-6" })}
    </a>
  );
}