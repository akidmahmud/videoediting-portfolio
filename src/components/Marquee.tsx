import s from "./Marquee.module.css";

const items = [
  "Podcast clips",
  "Kinetic typography",
  "Vox-style explainers",
  "Motion graphics",
  "Brand ads",
  "Real-estate reels",
  "Captions",
  "Sound design",
  "Colour grading",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className={s.marquee} aria-label={items.join(", ")}>
      <div className={s.track} aria-hidden>
        {row.map((t, i) => (
          <span key={i} className={s.item}>
            <span className="display">{t}</span>
            <span className={s.sep} />
          </span>
        ))}
      </div>
    </div>
  );
}
