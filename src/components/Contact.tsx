"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import s from "./Contact.module.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Dhaka", hour: "2-digit", minute: "2-digit" }));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <section id="contact" className={s.section}>
      <div className="wrap">
        <a href={`mailto:${site.email}?subject=Editing%20project`} className={`display reveal ${s.big}`}>
          <span className={s.l1}>Have footage?</span>
          <span className={s.l2}>
            Let&rsquo;s cut it<span className={s.arrow}>→</span>
          </span>
        </a>

        <div className={`reveal ${s.row}`}>
          <button onClick={copy} className={s.email}>
            <span className="mono muted">Email</span>
            <span className={s.emailText}>{copied ? "Copied to clipboard ✓" : site.email}</span>
          </button>
          <div className={s.col}>
            <span className="mono muted">Based in</span>
            <span>
              {site.location} · {time} {site.timezone}
            </span>
          </div>
          <div className={s.col}>
            <span className="mono muted">Elsewhere</span>
            <span className={s.socials}>
              {site.socials.map((x) => (
                <a key={x.label} href={x.href} target="_blank" rel="noreferrer">
                  {x.label}
                </a>
              ))}
            </span>
          </div>
        </div>
      </div>

      <footer className={`wrap mono muted ${s.footer}`}>
        <span>
          © {new Date().getFullYear()} {site.name}. All edits, graphics & sound by me.
        </span>
        <span>Third-party interview footage used for spec edits belongs to its owners.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </section>
  );
}
