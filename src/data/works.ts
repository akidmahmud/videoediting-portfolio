export type Category = "short-form" | "motion" | "real-estate";

export type Work = {
  slug: string;
  title: string;
  subject: string;
  category: Category;
  style: string;
  duration: string;
  year: string;
  summary: string;
  did: string[];
  /** palette swatches (motion pieces) */
  palette?: string[];
  fonts?: string;
  credit?: string;
};

export const categories: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "short-form", label: "Short-form" },
  { id: "motion", label: "Motion design" },
  { id: "real-estate", label: "Real estate" },
];

export const works: Work[] = [
  {
    slug: "sam-altman",
    title: "Young Founders",
    subject: "Sam Altman",
    category: "short-form",
    style: "Talking-head reel",
    duration: "01:02",
    year: "2026",
    summary:
      "A long-form podcast cut down to one tight idea. Word-timed captions, pop-up visuals on key beats and a music bed that lifts the payoff.",
    did: ["Clip selection & story", "9:16 reframing with subject tracking", "Word-timed captions", "Pop-up visuals & SFX", "Music & loudness mix"],
    credit: "Spec edit · footage © original owners",
  },
  {
    slug: "mcconaughey",
    title: "Humility",
    subject: "Matthew McConaughey",
    category: "short-form",
    style: "Vox-style explainer",
    duration: "00:58",
    year: "2026",
    summary:
      "Editorial explainer treatment: paper textures, tape-and-cutout graphics and newsroom typography wrapped around an interview moment.",
    did: ["Editorial layout system", "Cut-out & collage graphics", "Highlighter captions", "Consistent framing", "Sound design"],
    credit: "Spec edit · footage © original owners",
  },
  {
    slug: "james-clear",
    title: "Goals vs Happiness",
    subject: "James Clear",
    category: "short-form",
    style: "Cinematic podcast clip",
    duration: "01:30",
    year: "2026",
    summary:
      "Modern Wisdom-inspired look: moody grade, bold condensed headline, accent-word captions and a clean lower-third.",
    did: ["Hook-first restructure", "Colour grade", "Headline & accent captions", "Lower-third design", "Audio clean-up"],
    credit: "Spec edit · footage © original owners",
  },
  {
    slug: "huberman",
    title: "Mentally Dangerous",
    subject: "Andrew Huberman",
    category: "short-form",
    style: "Kinetic typography",
    duration: "01:00",
    year: "2026",
    summary:
      "Typography as the main character. Words land on the beat of the speech with weight, scale and rhythm instead of standard subtitles.",
    did: ["Kinetic type animation", "Speech-synced timing", "Subtle reframing", "Type system & palette", "Music ducking"],
    credit: "Spec edit · footage © original owners",
  },
  {
    slug: "brentwood",
    title: "$1.99M Brentwood Listing",
    subject: "Luxury home tour",
    category: "real-estate",
    style: "Property listing reel",
    duration: "00:59",
    year: "2026",
    summary:
      "A full house tour turned into a one-minute listing reel: calm pacing, smooth room-to-room flow, floating detail shots and a clean end card.",
    did: ["Story-led room order", "Smooth transitions", "One-word captions", "Floating photo bubbles", "End card & fade"],
    credit: "Spec edit · footage © original owners",
  },
  {
    slug: "nova",
    title: "NOVA Pay",
    subject: "Fintech card — mock brand",
    category: "motion",
    style: "Paper-collage ad",
    duration: "00:11",
    year: "2026",
    summary: "Cash and receipts on crumpled paper give way to a single card. Tap. Split. Done.",
    did: ["Concept & script", "All assets drawn by hand", "Motion & transitions", "Original SFX & music"],
    palette: ["#2747FF", "#EFEBE2", "#141416"],
    fonts: "Archivo Black · DM Serif Display",
  },
  {
    slug: "wander",
    title: "Wander",
    subject: "Travel app — mock brand",
    category: "motion",
    style: "Travel app spot",
    duration: "00:11",
    year: "2026",
    summary: "Real Kyoto footage cut to a travel-app pitch: whip-pan transitions, a warm teal-orange grade and a booking notification that lands mid-flight.",
    did: ["Concept & script", "Footage selection & cut", "Colour grade", "UI & type animation", "Original SFX & music"],
    palette: ["#FF6A2B", "#F4EEE2", "#1B1A17"],
    fonts: "Bodoni Moda · Instrument Serif · Archivo",
    credit: "Stock footage via Pexels · edit, grade, UI & sound by me",
  },
  {
    slug: "archive",
    title: "The Archive",
    subject: "Museum night — mock event",
    category: "motion",
    style: "Event promo",
    duration: "00:11",
    year: "2026",
    summary: "The museum closes at six. We don't. A moody, low-key grade across real gallery footage with editorial serif titles.",
    did: ["Concept & script", "Footage selection & cut", "Night-time colour grade", "Editorial titles", "Original SFX & music"],
    palette: ["#0C3A2C", "#D6AC54", "#F6F0E2"],
    fonts: "Bodoni Moda · Space Grotesk",
    credit: "Stock footage via Pexels · edit, grade, titles & sound by me",
  },
  {
    slug: "stride",
    title: "STRIDE",
    subject: "Running app — mock brand",
    category: "motion",
    style: "3D kinetic type spot",
    duration: "00:11",
    year: "2026",
    summary: "3D-tilting type, speed lines and a live run map counting up to a personal best.",
    did: ["Concept & script", "3D type & motion blur", "Data UI animation", "Original SFX & music"],
    palette: ["#C6FF00", "#0D0E10", "#F5F6F0"],
    fonts: "Archivo Black · Archivo",
  },
  {
    slug: "brewly",
    title: "Brewly",
    subject: "Coffee app — mock brand",
    category: "motion",
    style: "App promo · motion graphics",
    duration: "00:11",
    year: "2026",
    summary: "Seven people ahead of you? Skip it. A fully animated app promo, from queue to cup to logo.",
    did: ["Concept & script", "App UI design", "Motion graphics & kinetic type", "Original SFX & music"],
    palette: ["#341878", "#C4B2FF", "#FFFCF6"],
    fonts: "DM Serif Display · Archivo",
    credit: "Concept, UI, animation & sound by me",
  },
];

export const media = (slug: string) => ({
  full: `/media/${slug}.mp4`,
  preview: `/media/preview/${slug}.mp4`,
  poster: `/media/poster/${slug}.jpg`,
});
