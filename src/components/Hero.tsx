import { works, media } from "@/data/works";
import s from "./Hero.module.css";

const fan = ["nova", "james-clear", "wander"];

export default function Hero() {
  const lines = [["Edits", "that"], ["stop", "the"], ["scroll."]];
  let wi = 0;
  return (
    <section id="top" className={s.hero}>
      <div className={`wrap ${s.grid}`}>
        <div className={s.copy}>
          <h1 className={`display ${s.title}`} aria-label="Edits that stop the scroll.">
            {lines.map((ln, i) => (
              <span key={i} className={s.line}>
                {ln.map((w) => {
                  const d = wi++;
                  const last = w === "scroll.";
                  return (
                    <span key={w} className={s.mask}>
                      <span className={`${s.word} ${last ? s.accent : ""}`} style={{ animationDelay: `${0.15 + d * 0.08}s` }}>
                        {w}
                      </span>
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>

          <p className={s.lede}>
            I turn long podcasts, raw property tours and blank briefs into short-form video people actually watch —
            captions, motion graphics and sound design included, with editable project files on every delivery.
          </p>

          <div className={s.actions}>
            <a href="#work" className={s.primary}>
              <span className={s.playIcon} aria-hidden />
              Watch the work
            </a>
            <a href="#contact" className={s.secondary}>
              Book an edit →
            </a>
          </div>
        </div>

        <div className={s.stage} aria-hidden>
          <span className={`${s.corner} ${s.tl}`} />
          <span className={`${s.corner} ${s.tr}`} />
          <span className={`${s.corner} ${s.bl}`} />
          <span className={`${s.corner} ${s.br}`} />
          <div className={s.fan}>
            {fan.map((slug, i) => {
              const m = media(slug);
              const w = works.find((x) => x.slug === slug)!;
              return (
                <figure key={slug} className={`${s.phone} ${s[`p${i}`]}`}>
                  <video src={m.preview} poster={m.poster} autoPlay muted loop playsInline preload="metadata" />
                  <figcaption className="mono">
                    <span>{w.style}</span>
                    <span>{w.duration}</span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
          <div className={`mono ${s.frameInfo}`}>
            <span>1080 × 1920</span>
            <span>9:16</span>
            <span>30 FPS</span>
          </div>
        </div>
      </div>

      <div className={`wrap ${s.stats}`}>
        {[
          ["10", "Featured edits"],
          ["5", "Editing styles"],
          ["100%", "Original SFX & music on motion work"],
          ["PR / AE", "Project files with every delivery"],
        ].map(([n, l]) => (
          <div key={l} className={s.stat}>
            <span className={`display ${s.statNum}`}>{n}</span>
            <span className={`mono muted ${s.statLabel}`}>{l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
