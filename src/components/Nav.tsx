"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import s from "./Nav.module.css";

const pad = (n: number) => String(Math.floor(n)).padStart(2, "0");

/** Page scroll shown as a timecode + playhead, like an edit timeline. */
export default function Nav() {
  const [p, setP] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // whole page = 2 minutes of "timeline" at 25 fps
  const secs = p * 120;
  const tc = `00:${pad(secs / 60)}:${pad(secs % 60)}:${pad((secs * 25) % 25)}`;

  const links = [
    ["Work", "#work"],
    ["Motion", "#motion"],
    ["Services", "#services"],
    ["Process", "#process"],
  ];

  return (
    <header className={s.nav}>
      <div className={s.bar}>
        <a href="#top" className={s.logo} aria-label="Home">
          <span className={s.logoMain}>{site.brand}</span>
          <span className={s.logoCut} aria-hidden />
          <span className={s.logoSub}>{site.brandSuffix}</span>
        </a>

        <div className={`${s.tc} mono`} aria-hidden>
          <span className={s.recDot} />
          <span>REC</span>
          <span className={s.tcNum}>{tc}</span>
        </div>

        <nav className={s.links} aria-label="Primary">
          {links.map(([l, h]) => (
            <a key={h} href={h} className={s.link}>
              {l}
            </a>
          ))}
          <a href="#contact" className={s.cta}>
            Start a project
          </a>
        </nav>

        <button className={s.burger} onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">
          <span />
          <span />
        </button>
      </div>

      <div className={s.track} aria-hidden>
        <div className={s.fill} style={{ transform: `scaleX(${p})` }} />
        <div className={s.head} style={{ left: `${p * 100}%` }} />
      </div>

      {open && (
        <div className={s.sheet} onClick={() => setOpen(false)}>
          {[...links, ["Contact", "#contact"]].map(([l, h], i) => (
            <a key={h} href={h} className={`${s.sheetLink} display`}>
              <span className="mono muted">0{i + 1}</span>
              {l}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
