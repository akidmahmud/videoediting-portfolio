"use client";

import { useState } from "react";
import { works, categories, type Category } from "@/data/works";
import WorkCard from "./WorkCard";
import s from "./Work.module.css";

export default function Work() {
  const [cat, setCat] = useState<"all" | Category>("all");
  const shown = cat === "all" ? works : works.filter((w) => w.category === cat);
  const list = shown.map((w) => w.slug);

  return (
    <section id="work" className={s.section}>
      <div className="wrap">
        <div className={s.head}>
          <h2 className={`display reveal ${s.h2}`}>
            Selected <br />
            cuts<sup className={`mono ${s.count}`}>({String(works.length).padStart(2, "0")})</sup>
          </h2>
          <div className={`reveal ${s.side}`}>
            <p className="muted">
              Every piece below was cut, designed and sound-designed end to end. Hover to preview, click to watch with sound.
            </p>
            <div className={s.filters} role="tablist" aria-label="Filter work">
              {categories.map((c) => {
                const n = c.id === "all" ? works.length : works.filter((w) => w.category === c.id).length;
                return (
                  <button
                    key={c.id}
                    role="tab"
                    aria-selected={cat === c.id}
                    className={`${s.filter} ${cat === c.id ? s.active : ""}`}
                    onClick={() => setCat(c.id)}
                  >
                    {c.label}
                    <span className="mono">{n}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className={s.grid} key={cat}>
          {shown.map((w, i) => (
            <div key={w.slug} className={s.cell} style={{ animationDelay: `${i * 0.05}s` }}>
              <WorkCard work={w} index={i} list={list} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
