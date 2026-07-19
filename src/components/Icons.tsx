interface IconProps {
  href: string;
  src: string;
  alt: string;
}

export default function Icon({ href, src, alt }: IconProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} className="icon w-7 h-7 opacity-100"/>
    </a>
  );
}