import s from "./Process.module.css";

const steps = [
  { t: "Brief", d: "You send footage or an idea. I reply with a hook, a structure and a reference look within 24 hours." },
  { t: "Rough cut", d: "Story first: the pacing, the hook and the payoff locked before any polish goes on." },
  { t: "Polish", d: "Captions, motion graphics, colour, sound design and a music bed mixed to platform loudness." },
  { t: "Deliver", d: "Final 9:16 MP4 plus the editable project package. Two revision rounds included." },
];

// [track, start%, width%, label, kind]
const clips: [number, number, number, string, string][] = [
  [0, 27, 16, "Titles", "g"],
  [0, 52, 12, "Captions", "g"],
  [0, 70, 20, "Motion GFX", "g"],
  [1, 0, 24, "Footage review", "v"],
  [1, 24.5, 26, "Rough cut", "v"],
  [1, 51, 24, "Grade", "v"],
  [1, 75.5, 24.5, "Master", "v"],
  [2, 24.5, 50, "Dialogue", "a"],
  [2, 75.5, 24.5, "Mix", "a"],
  [3, 30, 40, "Music bed", "m"],
  [3, 55, 4, "SFX", "s"],
  [3, 63, 4, "SFX", "s"],
  [3, 80, 4, "SFX", "s"],
];
const tracks = ["V2", "V1", "A1", "A2"];
const pad = (n: number) => String(n).padStart(2, "0");

export default function Process() {
  return (
    <section id="process" className={s.section}>
      <div className="wrap">
        <h2 className={`display reveal ${s.h2}`}>
          From raw <br />
          to <span className={s.accent}>posted</span>
        </h2>

        <div className={`reveal ${s.timeline}`} aria-hidden>
          <div className={`mono ${s.ruler}`}>
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i}>{`00:${pad(Math.floor((i * 16) / 60))}:${pad((i * 16) % 60)}:00`}</span>
            ))}
          </div>
          {tracks.map((tr, ti) => (
            <div key={tr} className={s.track}>
              <span className={`mono ${s.trackLabel}`}>{tr}</span>
              <div className={s.lane}>
                {clips
                  .filter((c) => c[0] === ti)
                  .map(([, x, w, label, kind], i) => (
                    <span key={i} className={`${s.clip} ${s[kind]}`} style={{ left: `${x}%`, width: `${w}%`, transitionDelay: `${0.2 + x / 120}s` }}>
                      {w > 6 && <em>{label}</em>}
                    </span>
                  ))}
              </div>
            </div>
          ))}
          <div className={s.playheadArea}>
            <div className={s.playhead} />
          </div>
        </div>

        <ol className={s.steps}>
          {steps.map((x, i) => (
            <li key={x.t} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <span className={`mono ${s.n}`}>0{i + 1}</span>
              <h3 className={s.t}>{x.t}</h3>
              <p className="muted">{x.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
