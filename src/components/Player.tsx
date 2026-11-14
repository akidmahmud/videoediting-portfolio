"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { works, media, type Work } from "@/data/works";
import s from "./Player.module.css";

type Ctx = { open: (slug: string, list?: string[]) => void };
const PlayerCtx = createContext<Ctx>({ open: () => {} });
export const usePlayer = () => useContext(PlayerCtx);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [list, setList] = useState<string[]>([]);
  const [idx, setIdx] = useState<number | null>(null);

  const open = useCallback((slug: string, l?: string[]) => {
    const L = l && l.length ? l : works.map((w) => w.slug);
    setList(L);
    setIdx(Math.max(0, L.indexOf(slug)));
  }, []);
  const close = useCallback(() => setIdx(null), []);
  const step = useCallback(
    (d: number) => setIdx((i) => (i === null ? i : (i + d + list.length) % list.length)),
    [list.length]
  );

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [idx, close, step]);

  const work = idx !== null ? works.find((w) => w.slug === list[idx]) : undefined;

  return (
    <PlayerCtx.Provider value={{ open }}>
      {children}
      {work && <Modal work={work} n={idx! + 1} total={list.length} onClose={close} onStep={step} />}
    </PlayerCtx.Provider>
  );
}

function Modal({ work, n, total, onClose, onStep }: { work: Work; n: number; total: number; onClose: () => void; onStep: (d: number) => void }) {
  const m = media(work.slug);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => closeRef.current?.focus(), []);

  return (
    <div className={s.overlay} role="dialog" aria-modal="true" aria-label={work.title} onClick={onClose}>
      <div className={s.panel} onClick={(e) => e.stopPropagation()}>
        <div className={s.videoWrap}>
          <video key={work.slug} className={s.video} src={m.full} poster={m.poster} controls autoPlay playsInline />
        </div>

        <aside className={s.info}>
          <div className={`mono muted ${s.topline}`}>
            <span>
              {String(n).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <button ref={closeRef} className={s.close} onClick={onClose} aria-label="Close">
              Close ✕
            </button>
          </div>

          <p className={`mono ${s.style}`}>{work.style}</p>
          <h3 className={`display ${s.title}`}>{work.title}</h3>
          <p className={`muted ${s.subject}`}>{work.subject}</p>
          <p className={s.summary}>{work.summary}</p>

          <dl className={s.meta}>
            <div>
              <dt className="mono muted">Runtime</dt>
              <dd>{work.duration}</dd>
            </div>
            <div>
              <dt className="mono muted">Format</dt>
              <dd>9:16 · 1080p</dd>
            </div>
            <div>
              <dt className="mono muted">Year</dt>
              <dd>{work.year}</dd>
            </div>
          </dl>

          <p className={`mono muted ${s.label}`}>What I did</p>
          <ul className={s.did}>
            {work.did.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>

          {work.palette && (
            <div className={s.palette}>
              {work.palette.map((c) => (
                <span key={c} style={{ background: c }} title={c} />
              ))}
              <span className="mono muted">{work.fonts}</span>
            </div>
          )}

          {work.credit && <p className={`mono ${s.credit}`}>{work.credit}</p>}

          <div className={s.nav}>
            <button onClick={() => onStep(-1)} aria-label="Previous">
              ← Prev
            </button>
            <button onClick={() => onStep(1)} aria-label="Next">
              Next →
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
