// src/data/index.js — case studies, credentials, stack

export const CASES = [
  {
    id: "lucent",
    num: "01",
    client: "Lucent Biopharma",
    sector: "Pharma · Webflow",
    date: "Feb — May 2025",
    role: "UX research · Information architecture · Webflow build",
    title: "A research-led rebuild for a specialist pharma consultancy.",
    summary:
      "Stakeholder interviews and a content audit translated into an 18-page Webflow site — clear service architecture, story-first homepage, considered editorial detail.",
    stack: ["Figma", "Webflow", "Notion"],
    accent: "#054b57",
    accentText: "#fffaf3",
    metrics: [
      { label: "Pages designed & built", value: "18" },
      { label: "Stakeholder interviews", value: "7" },
      { label: "Sole designer + developer", value: "1" },
    ],
    deliverables: [
      "UX research report",
      "Site map + IA",
      "Brand-aligned UI",
      "Webflow CMS build",
      "Editorial copy review",
    ],
    process: [
      "Kicked off with seven stakeholder interviews across leadership, business development and medical operations. Wrote up a research report identifying three different user journeys the existing site collapsed into one.",
      "Built a site map and reorganised services into four parallel pillars — Clinical Development, Medical Affairs, Field Medical, Embedded Services — each with its own template, not its own bespoke layout.",
      "Designed the 18-page system in Figma against a tight type-and-colour palette (Georgia, two greens, one terracotta). One layout language, applied consistently.",
      "Built the whole thing in Webflow with a CMS-driven team and insights collection. Shipped on schedule, handed over with a Loom walkthrough so the client can update copy without touching me.",
    ],
    visual: "lucent",
    body: [
      {
        kind: "eyebrow-h",
        label: "Brief",
        title:
          "A specialist consultancy with a website that didn't reflect them.",
      },
      {
        kind: "p",
        text: "Lucent Biopharma is a London-based specialist consultancy working with the top global pharma companies on Clinical Development and Medical Affairs. The existing site read like a single broad service page — confident on visuals, vague on what they actually do.",
      },
      {
        kind: "p",
        text: "The brief was a full rebuild: research, IA, design and Webflow build. Solo, end-to-end, three months.",
      },
      {
        kind: "pull-quote",
        text: "Three audiences were trying to use one page. Splitting the site into four service pillars meant each could speak in its own language.",
      },
      {
        kind: "eyebrow-h",
        label: "Research",
        title: "Seven interviews, three user journeys.",
      },
      {
        kind: "p",
        text: "I ran 30–45 min structured interviews across Lucent's leadership, business development and medical operations teams. Same skeleton each time, plenty of room for tangents. Synthesised into a 22-page research report and an annotated site audit.",
      },
      {
        kind: "list",
        items: [
          "Pharma decision-makers wanted credibility signals up-front — case-volume, sectors, named partners.",
          "Prospective Medical Science Liaisons wanted to see the team, the culture, and the training path.",
          "Existing clients wanted self-serve access to people and timelines without an account portal.",
        ],
      },
      {
        kind: "eyebrow-h",
        label: "IA & design",
        title: "Four service pillars, one layout language.",
      },
      {
        kind: "p",
        text: "I reorganised twelve loose service pages into four parallel pillars — Clinical Development, Medical Affairs, Field Medical, Embedded Services — and gave each the same template. Same hero structure, same anatomy, same component library. The differentiation lives in the words, not the geometry.",
      },
      {
        kind: "eyebrow-h",
        label: "Build",
        title: "Built in Webflow, handed over without strings.",
      },
      {
        kind: "p",
        text: "Built the 18 pages in Webflow with CMS collections for the team, insights, and case studies, plus a Mega Menu the client can re-order from the editor. Mobile-first responsive, Lighthouse 96+ on every public route.",
      },
      {
        kind: "metrics-row",
        items: [
          { label: "Pages live", value: "18" },
          { label: "Avg Lighthouse", value: "96" },
          { label: "Project duration", value: "12 wk" },
          { label: "Post-launch tickets", value: "00" },
        ],
      },
    ],
  },
  {
    id: "fgm",
    num: "02",
    client: "Feel Good Menopause",
    sector: "Branding · Web",
    date: "Aug — Nov 2024",
    role: "Brand · UX · Webflow build",
    title: "A brand and site that brings Kirsty's personality to the front.",
    summary:
      "Built around the founder's voice — warm, frank, evidence-based. Empower, Educate, Embrace as the organising principle; a custom illustration system; a site to be proud of.",
    stack: ["Figma", "Illustrator", "Webflow"],
    accent: "#e83b6e",
    accentText: "#ffffff",
    metrics: [
      { label: "End-to-end project", value: "12 wk" },
      { label: "Logo + brand system", value: "01" },
      { label: "Pages built", value: "14" },
    ],
    deliverables: [
      "Wordmark + secondary marks",
      "Illustration brief & curation",
      "Webflow build",
      "Content-entry workshop",
    ],
    process: [
      "Spent the discovery phase listening: Kirsty has a clear, lived-experience voice — the brief was to make sure nothing flat or corporate got in front of it.",
      "Set a palette that's honest about being warm: cerise + teal with mustard accents. Sentence-case headlines so the words feel said, not announced.",
      "Worked with an illustrator brief I could direct, then composed pages around the artwork rather than dropping art on top of grids.",
      "Built in Webflow with a CMS for resources and a workshop-bookings flow. Trained Kirsty in a 90-min session — she's been adding pages solo since.",
    ],
    visual: "fgm",
    body: [
      {
        kind: "eyebrow-h",
        label: "Brief",
        title: "Brand and site for an evidence-led menopause coach.",
      },
      {
        kind: "p",
        text: "Kirsty is a registered nurse and menopause coach with a clear voice, a real client base and a website that didn't look like her. The brief: brand and site, ground-up, with the personality at the front.",
      },
      {
        kind: "pull-quote",
        text: '"Empower, Educate, Embrace — own your journey with a smile." That line set the tone. Everything else served it.',
      },
      {
        kind: "eyebrow-h",
        label: "Brand",
        title: "Cerise and teal, said warmly.",
      },
      {
        kind: "p",
        text: "Two-colour brand with a mustard accent. Sentence-case headlines so the words feel said, not announced. A custom illustration brief delivered art that does the demographic work without leaning on stock photography.",
      },
      {
        kind: "image",
        src: "/assets/case-fgm-laptop.webp",
        alt: "Feel Good Menopause — homepage on laptop",
        caption:
          "Homepage above the fold — the V-shaped group illustration is the brand's anchor.",
      },
      {
        kind: "eyebrow-h",
        label: "IA & design",
        title: "A site organised around how Kirsty actually helps.",
      },
      {
        kind: "list",
        items: [
          "Individuals — 1:1 coaching, monthly cohorts, the Vision Method.",
          "Employers — workshops and menopause-friendly workplace policy.",
          "Resources — a free library that doubles as lead generation.",
          "Kirsty's Story — the personal page that anchors the whole brand.",
        ],
      },
      {
        kind: "image",
        src: "/assets/case-fgm-grid.webp",
        alt: "Feel Good Menopause — multi-device mockup",
        caption:
          "Page system across breakpoints. Same anatomy, same components, three densities.",
      },
      {
        kind: "metrics-row",
        items: [
          { label: "Pages built", value: "14" },
          { label: "Logo variants", value: "04" },
          { label: "Self-served updates", value: "12+" },
          { label: "Workshops booked / mo", value: "~6" },
        ],
      },
    ],
  },
  {
    id: "wisemind",
    num: "03",
    client: "Wise Mind DBT",
    sector: "Product · Next.js",
    date: "Jan — ongoing 2026",
    role: "Product UX · Frontend engineering",
    title: "A DBT skills app that respects the moment it's opened in.",
    summary:
      "Dialectical Behaviour Therapy is acutely time-sensitive: people open the app mid-crisis. Designed and built a Next.js product that gets users to the right skill in two taps — and out again.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Postgres"],
    accent: "#6657d4",
    accentText: "#ffffff",
    metrics: [
      { label: "Taps to first skill", value: "2" },
      { label: "DBT modules", value: "24" },
      { label: "Median session", value: "46s" },
    ],
    deliverables: [
      "Research synthesis from DBT clinicians",
      "Information architecture",
      "Component library",
      "Next.js + Postgres build",
    ],
    process: [
      "Read the Linehan skills manual end-to-end. Sat with two DBT clinicians. Re-grouped 24 modules into four states-of-mind the user can actually feel: overwhelmed, numb, dysregulated, reflective.",
      "Designed for the worst moment first. Crisis surfaces are single-column, high-contrast, minimal cognitive load. Reflective surfaces can be richer.",
      "Built the whole thing in Next.js with TypeScript. Server components for the static skill library, client components only where they earn it (timers, mood logging).",
      "Shipping in private beta with a small panel of users on the clinical side; iterating on usage data weekly.",
    ],
    visual: "wisemind",
  },
  {
    id: "portal",
    num: "04",
    client: "Client Portal",
    sector: "Internal tools · Next.js",
    date: "Mar 2026",
    role: "Systems thinking · Full-stack",
    title: "The portal I wish I'd had three years ago.",
    summary:
      "A self-built internal tool for running a solo studio: projects, milestones, handovers, client tasks, useful links. Eat your own cooking.",
    stack: ["Next.js", "TypeScript", "Postgres", "Tailwind"],
    accent: "#9388e8",
    accentText: "#0c0a10",
    metrics: [
      { label: "Hours / week saved", value: "~6" },
      { label: "Routes shipped", value: "14" },
      { label: "Tables", value: "08" },
    ],
    deliverables: [
      "Schema design",
      "Auth + RBAC",
      "Project, milestone & handover flows",
      "Client task surfaces",
    ],
    process: [
      "Started from the symptom: I was losing 30 minutes a day to context-switching between Notion, email, and a spreadsheet.",
      "Modelled the schema first — projects, milestones, handovers, links, client tasks. Built the auth layer (NextAuth) and a small RBAC for the client-side surface.",
      'Designed the dashboard around the question I actually ask: "what\'s overdue?" Stats up top, recent projects, my tasks. Nothing else.',
      "Six routes shipped over a long weekend; rest landed across two evenings each. The site you're reading was project #1 inside the portal.",
    ],
    visual: "portal",
  },
  {
    id: "jorvik",
    num: "05",
    client: "Jorvik Web Dev",
    sector: "Own brand · Studio",
    date: "Live · 2024 →",
    role: "Founder · Solo studio",
    title: "My own studio — the brand and the business.",
    summary:
      "Jorvik Web Dev is the studio I run solo from York. Brand, site, client management, delivery — all of it is one person. Simple, sustainable websites for small businesses.",
    stack: ["Figma", "Webflow", "Shopify", "Next.js"],
    accent: "#3aa550",
    accentText: "#fffaf3",
    metrics: [
      { label: "Live retainers", value: "04" },
      { label: "Projects delivered", value: "12+" },
      { label: "Years solo", value: "02" },
    ],
    deliverables: [
      "Brand mark + system",
      "Marketing site",
      "Client-onboarding flow",
      "Service pricing pages",
    ],
    process: [
      "The hardest brand to design is your own — I spent three months saying no to versions that looked like everyone else's.",
      "Settled on a multi-tone identity (green / teal / orange) that's warm and accessible rather than corporate, and reads small-business-friendly without being twee.",
      'Marketing site built in Webflow with an honest pricing page, a real "about" page about why I started, and three project tiers — Shopify, consultancy, service businesses.',
      "Onboarding flow is a typeform-style intake; output feeds straight into the Client Portal above. Same person, same toolkit, end-to-end.",
    ],
    visual: "jorvik",
  },
];

export const CREDENTIALS = [
  {
    label: "Google UX Design",
    org: "Google · Coursera",
    detail: "Certificate · 2022",
    type: "cert",
  },
  {
    label: "Full-Stack Developer",
    org: "IT Career Switch",
    detail: "Diploma · 2023",
    type: "cert",
  },
  {
    label: "Meta Social Media Marketing",
    org: "Coursera",
    detail: "Certificate · 2025",
    type: "cert",
  },
  {
    label: "Webflow Foundations Partner",
    org: "Webflow",
    detail: "Certificate · 2026",
    type: "cert",
  },
  {
    label: "Enterprise Cube",
    org: "Digital skills training",
    detail: "Official trainer · 2025 →",
    type: "partner",
  },
  {
    label: "York & N. Yorks Growth Hub",
    org: "Small-business support",
    detail: "Course provider · 2025 →",
    type: "partner",
  },
  {
    label: "LX Foundry",
    org: "Course provider",
    detail: "Official trainer · 2026 →",
    type: "partner",
  },
];

export const TRAINING_TOPICS = [
  "Data-driven decision making",
  "E-commerce fundamentals",
  "Website strategy for small business",
  "UX for non-designers",
  "AI in everyday business workflows",
];

export const STACK = [
  {
    label: "Design",
    lead: ["Figma", "Adobe XD"],
    rest: ["Auto-layout", "Variables", "Prototyping", "Handoff"],
  },
  {
    label: "Frontend",
    lead: ["React", "Next.js", "TypeScript"],
    rest: ["Tailwind CSS", "CSS", "Liquid", "Server components"],
  },
  {
    label: "No-code",
    lead: ["Webflow", "Shopify"],
    rest: ["CMS modelling", "Interactions", "Editor handover"],
  },
  {
    label: "Backend",
    lead: ["Postgres", "NextAuth", "Vercel"],
    rest: ["SQL", "Server actions"],
  },
  {
    label: "Research",
    lead: ["User journeys", "Personas", "Site mapping"],
    rest: ["Interviews", "Usability testing", "Content audits"],
  },
];

export const ACCENT_PRESETS = {
  "#6657d4": {
    hover: "#9388e8",
    deep: "#4a3da8",
    glow: "rgba(102, 87, 212, 0.30)",
    tint: "rgba(102, 87, 212, 0.08)",
  },
  "#6a53fe": {
    hover: "#9f90fe",
    deep: "#4e3acf",
    glow: "rgba(106, 83, 254, 0.32)",
    tint: "rgba(106, 83, 254, 0.08)",
  },
  "#3aa550": {
    hover: "#5fc474",
    deep: "#268040",
    glow: "rgba(58, 165, 80, 0.26)",
    tint: "rgba(58, 165, 80, 0.08)",
  },
  "#ad3e28": {
    hover: "#cf5b41",
    deep: "#7e2c1c",
    glow: "rgba(173, 62, 40, 0.28)",
    tint: "rgba(173, 62, 40, 0.07)",
  },
};
