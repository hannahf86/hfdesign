// src/data/index.js — case studies, credentials, stack

export const CASES = [
  {
    id: "lucent",
    num: "01",
    client: "Lucent Biopharma",
    sector: "Pharma",
    date: "Feb — May 2025",
    role: "Project leadership · UX research · Information architecture · Webflow build",
    title: "A research-led rebuild for a specialist biopharma consultancy.",
    summary:
      "A research-led rebuild for a specialist biopharma consultancy. Stakeholder interviews and a content audit translated into an 18-page Webflow site — clear service architecture, story-first homepage, considered editorial detail.",
    description: [
      "The old site collapsed three distinct user journeys into one generic narrative. Stakeholder interviews and a content audit revealed that clinical teams, regulatory specialists, and founders all needed completely different entry points — but the site treated them the same.",
      "I started with a meeting with the marketing manager to understand the actual business challenge. Then I wrote a UX research report: three personas, empathy mapping, competitive analysis, user journeys. The research was clear — their audience (analytical, time-pressured, sceptical of marketing language) needed clarity and evidence, not persuasion.",
      "Armed with that, I produced 18 pages of lofi wireframes in Figma — pure IA and structure, no visual design yet. The graphic designer then took those and made them hifi, bringing the brand to life. Simultaneously, I was project-leading: coordinating with the copywriter to ensure messaging was evidence-first, not vague; working with the designer to make sure the hierarchy supported the research findings.",
      "Then came the CMS design — the tricky bit. The marketing manager needed to update copy, case studies, and service details without touching code. I had to think ahead about how to structure the content so it was intuitive to edit but still locked down enough to maintain integrity. That's why Webflow over a custom build — it gave us the flexibility and the guardrails.",
    ],
    stack: ["Canva", "Figma", "Notion", "Webflow", "CMS"],
    accent: "#054b57",
    accentText: "#fffaf3",
    metrics: [
      { label: "Pages designed & built", value: "18" },
      { label: "Stakeholder interviews", value: "3" },
      { label: "Project lead & Developer", value: "1" },
    ],
    deliverables: [
      "UX research report",
      "Site map + IA",
      "Brand-aligned UI",
      "Webflow CMS build",
      "SEO guidance",
    ],
    process: [
      "Stakeholder interviews · UX research report",
      "Site map · IA across four service pillars",
      "Design system in Figma · 18-page build",
      "Webflow CMS build · Client handover & training",
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
    sector: "Women's health",
    date: "Aug — Nov 2024",
    role: "UX design · Information architecture · Webflow",
    title:
      "Expanding the brand and creating a site that brings Kirsty's personality to the front.",
    summary:
      "A brand and site that brings Kirsty's personality to the front. Built around the founder's voice — warm, frank, evidence-based. Empower, Educate, Embrace as the organising principle; a custom illustration system; a site to be proud of.",
    description: [
      "Kirsty came with a clear business plan and a stronger sense of who she was than most founders. She'd already commissioned a logo and visual identity from a graphic designer. My job was to expand that into a full website system — and crucially, make it something she could maintain as her business grew.",
      "I started with interviews to understand how she actually positioned her work: individuals seeking 1:1 coaching, employers wanting menopause-friendly policies, resources as lead gen. Her business plan was the backbone; the interviews filled in the gaps about voice and tone.",
      "The logo and colour system were already there (cerise, teal, mustard). What I did was take those and apply them consistently across 14 pages. I made a deliberate call on sentence-case headlines — they felt more conversational, less corporate, and matched her actual voice. Tested it in Figma and it worked.",
      "Then came the build. Kirsty needed to be able to edit and add pages herself as she expanded. That ruled out a custom build — Webflow gave her the control. I built templates, did a single Google Meet walkthrough, created PDF guides, and left her with tutorial videos. She's been adding pages solo since launch.",
    ],
    stack: ["Notion", "Figma", "Illustrator", "Webflow"],
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
      "Discovery interviews · Brand expansion brief",
      "Applied existing brand across 14 pages",
      "IA organized by service offerings",
      "Webflow build with client training & templates",
    ],
    visual: "fgm",
    body: [
      {
        kind: "eyebrow-h",
        label: "Brief",
        title:
          "Expanding the brand and creating a site for an evidence-led menopause coach.",
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
      "A DBT skills app that respects the moment it's opened in. Dialectical Behaviour Therapy is acutely time-sensitive: people open the app mid-crisis. I designed and built a Next.js product that gets users to the right skill in two taps — and out again.",
    overview:
      "Wise Mind DBT is a digital mental health platform designed to support individuals through Dialectical Behaviour Therapy (DBT). The app focuses on providing accessible, evidence-based tools for managing emotions and improving interpersonal skills.",
    description: [
      "DBT is acutely time-sensitive. People open the app mid-crisis. So I started by reading the Linehan manual end-to-end, then interviewed clinicians and patients to understand how DBT actually works in practice — not the 24-skill theory, but the four core modules: Mindfulness, Distress Tolerance, Interpersonal Effectiveness, Emotional Regulation.",
      "Then I made two deliberate calls based on lived experience. First: most people don't use all 30 skills — they use 3–5 consistently. So I built SOS and 'My Toolkit' as emergency shortcuts that learn what actually helps you, not a generic library.",
      "Second: I designed for therapist involvement. Neurodiverse users (especially those with ADHD or executive dysfunction) struggle with the friction of 'remember to open the app.' So therapists can monitor skill usage without patients having to actively share — it gives them talking points in session and keeps momentum going.",
      "Built in Next.js with server components for the static skill library (fast, lightweight) and client components only where they earn it (timers, mood logging, toolkit customisation). The therapist-patient sync required careful state management; this architecture kept it clean. Currently in private beta with clinical users, iterating weekly on usage data and feedback.",
    ],
    stack: ["Canva ", "Figma", "Next.js", "TypeScript", "Tailwind", "Postgres"],
    accent: "#6657d4",
    accentText: "#ffffff",
    metrics: [
      { label: "Taps to first skill", value: "2" },
      { label: "DBT modules", value: "24" },
      { label: "Median session", value: "46s" },
    ],
    deliverables: [
      "Research synthesis from DBT clinicians and patients",
      "Information architecture",
      "Component library",
      "Next.js + Postgres build",
    ],
    process: [
      "Research: DBT manual + clinician & patient interviews",
      "IA: Four emotional states (not 24 modules)",
      "Build: Next.js with server & client components",
      "Private beta with clinical users · Weekly iteration",
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
      "The portal I wish I'd had three years ago. A self-built internal tool for running a solo studio: projects, milestones, handovers, client tasks, useful links. Eat your own cooking.",
    description: [
      "I was losing hours a day context-switching between Notion, email, ClickUp, and spreadsheets. And I was paying for separate services that almost did what I needed but never quite fit. So I built a portal to consolidate everything: projects, milestones, handovers, client tasks, useful links — all in one place, queryable, and fast.",
      "I started with schema design. Projects have milestones; milestones have handovers; handovers surface client tasks. Built NextAuth for the auth layer and a light RBAC so clients can see their own work without access to everything else. Clean separation of concerns.",
      "The dashboard answers one question: 'what's overdue?' Stats at the top (active projects, open milestones, overdue tasks), recent project list, my pending actions. Nothing extraneous. If it doesn't answer that question, it doesn't get built.",
      "Shipped six routes over a long weekend; the rest landed across two evenings each. This portal became the backbone of how I actually work — Lucent Biopharma, Feel Good Menopause, and Wise Mind DBT are all managed inside it. Eating your own cooking means the tool evolves with the business.",
    ],
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
      "Schema design · Projects, milestones, handovers, tasks",
      "Auth layer (NextAuth) · RBAC for client access",
      "Dashboard design · Overdue-first prioritization",
      "Shipped MVP over weekend · Incremental feature builds",
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
      "My own studio — the brand and the business. Jorvik Web Dev is the studio I run solo from York. Brand, site, client management, delivery — all of it is one person. Simple, sustainable websites for small businesses.",
    description: [
      "Jorvik Web Dev is the studio I run solo from York. Two years in, I've delivered 12+ projects, maintained four live retainers, and trained dozens of small-business owners across North Yorkshire in digital skills. The brand and the business are inseparable — everything reflects the same values: clarity, sustainability, and real results.",
      "The hardest part was designing my own identity. I spent three months rejecting versions that looked polished but not me. Settled on a multi-tone palette (green, teal, orange) that feels warm and accessible without being twee. The mark works small, reads confident, and doesn't apologize for being a one-person operation.",
      "The site itself is deliberately transparent. Pricing page with no hidden fees or 'contact us' gates. An about page that actually explains why I started. Three project tiers — Webflow for small businesses, consultancy for product teams, service-business builds in Next.js. No gatekeeping, no mystery.",
      "The real system is behind the scenes: intake form → Client Portal → project management → handover. Everything feeds into one unified toolkit, so I can move fast without dropping context. Same person delivering research, design, and code means continuity. That's the promise, and it's how I actually work.",
    ],
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
      "Brand identity design · Multi-tone palette",
      "Webflow build with pricing & three project tiers",
      "Transparent pricing structure",
      "Intake form → Client Portal integration",
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
