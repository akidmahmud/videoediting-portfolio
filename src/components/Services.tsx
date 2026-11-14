import s from "./Services.module.css";

const services = [
  {
    t: "Podcast → Reels",
    d: "I find the strongest 60 seconds in a long conversation, restructure it hook-first and reframe it for 9:16 with word-timed captions.",
    tags: ["Clip selection", "Reframing", "Captions", "B-roll pops"],
  },
  {
    t: "Kinetic typography",
    d: "Type that moves with the voice. Built for creators whose ideas matter more than their b-roll.",
    tags: ["Type systems", "Speech sync", "Rhythm editing"],
  },
  {
    t: "Motion & brand ads",
    d: "Short product and app spots from a blank brief: concept, footage, grade, UI animation and original sound.",
    tags: ["Concept", "Screen replacement", "UI animation", "Sound design"],
  },
  {
    t: "Real-estate reels",
    d: "Listing tours cut into calm, easy-to-follow reels that sell the home in under a minute.",
    tags: ["Story order", "Smooth flow", "End cards"],
  },
];

export default function Services() {
  return (
    <section id="services" className={s.section}>
      <div className="wrap">
        <div className={s.head}>
          <h2 className={`display reveal ${s.h2}`}>What I cut</h2>
          <p className={`muted reveal ${s.note}`}>
            Every delivery includes the final MP4 <em>and</em> an editable package — Premiere/After Effects timeline,
            graphic overlays, audio stems and fonts — so your team can tweak it later.
          </p>
        </div>

        <ol className={s.list}>
          {services.map((x, i) => (
            <li key={x.t} className={`reveal ${s.item}`}>
              <span className={`mono ${s.n}`}>S/{String(i + 1).padStart(2, "0")}</span>
              <h3 className={`display ${s.t}`}>{x.t}</h3>
              <div className={s.body}>
                <p>{x.d}</p>
                <div className={s.tags}>
                  {x.tags.map((t) => (
                    <span key={t} className="mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
