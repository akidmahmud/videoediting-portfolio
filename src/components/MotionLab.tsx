"use client";

import { useRef, useState } from "react";
import { works, media } from "@/data/works";
import { usePlayer } from "./Player";
import s from "./MotionLab.module.css";

const pieces = works.filter((w) => w.category === "motion");

export default function MotionLab() {
  const { open } = usePlayer();
  const [hover, setHover] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const listRef = useRef<HTMLDivElement>(null);
  const list = pieces.map((p) => p.slug);
  const hw = pieces.find((p) => p.slug === hover);

  return (
    <section id="motion" className={s.section}>
      <div className="wrap">
        <div className={s.head}>
          <p className="mono muted reveal">Motion lab — 05 mock brand spots</p>
          <h2 className={`display reveal ${s.h2}`}>
            Built from <span className={s.outline}>a blank</span> brief
          </h2>
          <p className={`muted reveal ${s.lede}`}>
            No templates. Concept, footage, colour grade, typography, UI animation and the sound — every brand gets its own
            palette, type pairing and look.
          </p>
        </div>

        <div
          ref={listRef}
          className={s.list}
          onMouseMove={(e) => {
            const r = listRef.current!.getBoundingClientRect();
            setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
          }}
          onMouseLeave={() => setHover(null)}
        >
          {pieces.map((p, i) => (
            <button
              key={p.slug}
              className={`${s.row} ${hover && hover !== p.slug ? s.dim : ""}`}
              onMouseEnter={() => setHover(p.slug)}
              onFocus={() => setHover(p.slug)}
              onClick={() => open(p.slug, list)}
              style={{ ["--c" as string]: p.palette![0] }}
            >
              <span className={`mono muted ${s.n}`}>{String(i + 1).padStart(2, "0")}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={s.thumb} src={media(p.slug).poster} alt="" loading="lazy" />
              <span className={`display ${s.name}`}>{p.title}</span>
              <span className={s.info}>
                <span className={s.styleName}>{p.style}</span>
                <span className="mono muted">{p.fonts}</span>
              </span>
              <span className={s.swatches} aria-hidden>
                {p.palette!.map((c) => (
                  <i key={c} style={{ background: c }} />
                ))}
              </span>
              <span className={s.arrow} aria-hidden>
                ↗
              </span>
            </button>
          ))}

          <div
            className={`${s.float} ${hw ? s.show : ""}`}
            style={{ transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%) rotate(${hw ? -4 : 0}deg)` }}
            aria-hidden
          >
            {pieces.map((p) => (
              <video
                key={p.slug}
                src={media(p.slug).preview}
                poster={media(p.slug).poster}
                muted
                loop
                playsInline
                autoPlay
                preload="none"
                className={hover === p.slug ? s.vis : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
