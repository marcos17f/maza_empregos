import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BLOG_POSTS } from "@/data/catalog";

const PER_SCREEN = 3;
const ROTATE_MS = 8000;

export default function BlogHighlights() {
  const [screen, setScreen] = useState(0);
  const [paused, setPaused] = useState(false);

  const screens = Math.max(1, Math.floor(BLOG_POSTS.length / PER_SCREEN));

  useEffect(() => {
    if (paused || screens < 2) return;
    const id = setInterval(() => setScreen((s) => (s + 1) % screens), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, screens]);

  const visible = BLOG_POSTS.slice(
    (screen % screens) * PER_SCREEN,
    ((screen % screens) + 1) * PER_SCREEN,
  );

  return (
    <ul
      className="mt-6 grid gap-6 sm:grid-cols-3"
      aria-live="polite"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {visible.map((post) => (
        <li key={post.slug} className="animate-[fadeIn_.4s_ease]">
          <Link href="/como-funciona" className="group block">
            <div className="relative aspect-[768/430] overflow-hidden rounded-xl bg-surface-light">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width: 1440px) 432px, (min-width: 640px) 33vw, 100vw"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[11px] font-bold not-italic text-brand shadow-sm">
                {post.category}
              </span>
            </div>
            <p className="mt-3 text-base font-semibold leading-snug text-[#171717] group-hover:text-brand group-hover:underline">
              {post.title}
            </p>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#444]">{post.excerpt}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
