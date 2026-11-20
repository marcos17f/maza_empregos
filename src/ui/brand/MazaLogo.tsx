import Image from "next/image";
import React from "react";

type LogoProps = {
  variant?: "default" | "white" | "icon";
  className?: string;
};

export default function MazaLogo({ variant = "default", className = "" }: LogoProps) {
  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <rect width="44" height="44" rx="12" fill="#1D1D1B" />
        <path
          d="M10 30V14H15.2L22 23.2L28.8 14H34V30H29.4V20.6L23.5 28.4H20.5L14.6 20.6V30H10Z"
          fill="#C8161D"
        />
        <circle cx="34" cy="11" r="3.5" fill="#C8161D" />
      </svg>
    );
  }

  if (variant === "white") {
    return (
      <span
        className={`inline-flex items-center rounded-xl bg-white px-3.5 py-1.5 shadow-sm ${className}`}
      >
        <Image
          src="/images/maza/maza-logo-site.png"
          alt="MaZa Empregos"
          width={200}
          height={96}
          priority
          className="h-9 w-auto object-contain md:h-10"
        />
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/images/maza/maza-logo-site.png"
        alt="MaZa Empregos"
        width={200}
        height={96}
        priority
        className="h-10 w-auto object-contain md:h-11"
      />
    </span>
  );
}
