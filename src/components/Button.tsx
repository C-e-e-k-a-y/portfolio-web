import type React from "react";

interface ButtonProps {
  value: string;
  icon?: React.ReactNode; 
}

export default function Button({ value, icon }: ButtonProps) {
  return (
    <a
      href={`#${value.toLowerCase()}`}
      className="nav-btn w-full text-xl flex items-center group"
    >
      <span className="mr-2 shrink-0">{icon}</span>
      <span className="max-w-0 hidden opacity-0 group-hover:max-w-32 group-hover:opacity-100 group-hover:inline transition-all duration-200">
        {value}
      </span>
      <span className="nav-btn-line" aria-hidden="true"></span>
    </a>
  );
}