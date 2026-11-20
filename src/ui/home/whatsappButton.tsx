import React from "react";
import { SPECIALIST_MESSAGE, whatsappLink } from "@/utils/contact";

export default function WhatsappButton() {
  const link = whatsappLink(SPECIALIST_MESSAGE);

  return (
    <a
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#25D366] shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-[#1ebe5d] md:h-16 md:w-16"
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Falar com a MaZa Empregos pelo WhatsApp"
      title="Falar no WhatsApp"
    >
      <svg
        className="h-8 w-8 md:h-9 md:w-9"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 3C8.832 3 3 8.832 3 16c0 2.51.72 4.85 1.96 6.84L3.2 29l6.35-1.67A12.92 12.92 0 0016 29c7.168 0 13-5.832 13-13S23.168 3 16 3zm0 23.6a10.56 10.56 0 01-5.39-1.48l-.39-.23-3.77.99 1-3.68-.25-.4A10.55 10.55 0 015.4 16c0-5.84 4.76-10.6 10.6-10.6 2.83 0 5.49 1.1 7.49 3.1a10.53 10.53 0 013.11 7.5c0 5.84-4.76 10.6-10.6 10.6zm5.82-7.94c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.72.16-.21.32-.82 1.03-1 1.24-.19.22-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.22.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.3 3.3.16.22 2.26 3.45 5.47 4.84.76.33 1.36.53 1.82.67.77.24 1.46.21 2.01.13.61-.09 1.88-.77 2.15-1.51.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z"
          fill="#ffffff"
        />
      </svg>
    </a>
  );
}
