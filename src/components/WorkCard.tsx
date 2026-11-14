"use client";

import { useEffect, useRef, useState } from "react";
import { media, type Work } from "@/data/works";
import { usePlayer } from "./Player";
import s from "./WorkCard.module.css";

export default function WorkCard({ work, index, list }: { work: Work; index: number; list: string[] }) {
  const { open } = usePlayer();
  const ref = useRef<HTMLButtonElement>(null);
  const vid = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const m = media(work.slug);

  // touch devices: play preview while the card is centred on screen
  useEffect(() => {
    if (!window.matchMedia("(hover: none)").matches || !ref.current) return;
    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), { threshold: 0.7 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const v = vid.current;
    if (!v) return;
    if (active) v.play().catch(() => {});
    else {
      v.pause();
      v.currentTime = 0;
    }
  }, [active]);

  return (
    <button
      ref={ref}
      className={`${s.card} ${active ? s.on : ""}`}
      onClick={() => open(work.slug, list)}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setCursor({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      aria-label={`Play ${work.title} — ${work.style}`}
    >
      <div className={s.media}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={m.poster} alt="" loading="lazy" className={s.poster} />
        <video ref={vid} className={s.preview} src={m.preview} muted loop playsInline preload="none" />
        <span className={s.play} style={{ left: cursor.x, top: cursor.y }} aria-hidden>
          Play
        </span>
        <span className={`mono ${s.dur}`}>{work.duration}</span>
      </div>
      <div className={s.meta}>
        <span className={`mono muted ${s.idx}`}>{String(index + 1).padStart(2, "0")}</span>
        <div className={s.text}>
          <span className={s.title}>{work.title}</span>
          <span className={`mono muted ${s.tag}`}>{work.style}</span>
        </div>
      </div>
    </button>
  );
}
