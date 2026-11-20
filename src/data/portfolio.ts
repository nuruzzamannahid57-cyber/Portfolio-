/**
 * Every fact on this site comes from Nuruzzaman Nahid's current portfolio copy.
 * Edit here and the whole site follows. Don't add anything that isn't backed by your own work.
 */

export const profile = {
  fullName: 'Nuruzzaman Nahid',
  name: 'Nuruzzaman Nahid',
  first: 'Nahid',
  email: 'nuruzzamannahid922@gmail.com',
  location: 'Dhaka, Bangladesh',
  timezone: 'Asia/Dhaka',
  links: {
    linkedin: 'https://linkedin.com/in/n-nahid922',
    github: 'https://github.com/BossNAHID',
  },
  /** Rotating hero designations. */
  roles: ['Key Account Manager', 'Internal Tools Builder', 'Growth & Partnerships', 'Problem Solver'],
  availability: 'Open to conversations',
};

export const stats = [
  { value: 731, decimals: 0, suffix: '', label: 'Key merchant accounts managed' },
  { value: 25, decimals: 0, suffix: 'k', label: 'Parcels a month, approx.' },
  { value: 85, decimals: 0, suffix: '%', label: 'Client retention improvement' },
  { value: 9, decimals: 0, suffix: '', label: 'Internal tools built & shipped' },
];

export type SkillCategory = { id: string; index: string; title: string; blurb: string; skills: string[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'account',
    index: '01',
    title: 'Account Management',
    blurb: 'Keeping merchants onboarded, priced fairly and retained across the whole relationship.',
    skills: ['Key Account Management', 'Partner Onboarding', 'Relationship Management', 'Business Reviews', 'Retention & Churn Reduction', 'Escalation Management'],
  },
  {
    id: 'sales',
    index: '02',
    title: 'Sales & Negotiation',
    blurb: 'Pricing and contracts matched to each merchant’s real volume and growth plans.',
    skills: ['Pricing Negotiation', 'Contract Negotiation', 'B2B & B2C Sales', 'Lead Generation', 'Telesales', 'Campaign & Promotion Support'],
  },
  {
    id: 'analytics',
    index: '03',
    title: 'Analytics & Reporting',
    blurb: 'Numbers first: dashboards and root-cause work that show problems before they become complaints.',
    skills: ['Google Sheets', 'Microsoft Excel', 'Google Apps Script', 'Performance Dashboards', 'Reporting', 'Root-Cause Problem Solving'],
  },
  {
    id: 'tooling',
    index: '04',
    title: 'Tooling',
    blurb: 'Self-contained internal tools on Node.js and Express, with Turso as the data layer.',
    skills: ['Node.js', 'Express', 'Turso', 'JavaScript', 'REST APIs', 'Telegram Bot API', 'Flask', 'Render', 'GitHub Actions'],
  },
];

export type Metric = { value: string; label: string };
export type Project = {
  id: string;
  index: string;
  title: string;
  year: string;
  kind: string;
  summary: string;
  stack: string[];
  contribution: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  motif: 'scan' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'carrybee-issue-tracker',
    index: '01',
    title: 'CarryBee Issue Tracker',
    year: '2026',
    kind: 'Ops console · Internal tool',
    summary:
      'The AD team’s day-to-day ops console: a Bangladesh hub map that flags trouble spots in real time, inline KAM remarks with follow-up tracking, and an office-hours-aware performance layer that measures response speed.',
    stack: ['Node.js', 'Express', 'Turso'],
    contribution: [
      'Built the ops console the AD team uses every day, replacing a spreadsheet-and-chat workflow that had stopped scaling.',
      'Added the office-hours-aware performance layer, so response speed is measured against the working day (9 AM – 6 PM).',
    ],
    features: ['Bangladesh hub map', 'Real-time trouble spots', 'Inline KAM remarks', 'Office-hours response tracking'],
    metrics: [
      { value: 'Live', label: 'In daily use by the team' },
      { value: '9–6', label: 'Office-hours response clock' },
    ],
    live: 'https://ad-team-issues-dashboard.onrender.com/',
    github: 'https://github.com/BossNAHID/Ad-team-issues-Dashboard',
    motif: 'scan',
  },
  {
    id: 'imas-lite',
    index: '02',
    title: 'IMAS LITE — Issue Escalation System',
    year: '2026',
    kind: 'Escalation · Telegram · API',
    summary:
      'Replaced a Google Sheets and Apps Script pipeline with an Express and Turso REST API and three connected apps: a raise-issue form, a KAM dashboard and an Ops/Hub console.',
    stack: ['Express', 'Turso', 'Telegram'],
    contribution: [
      'Shipped a raise-issue form, a KAM dashboard and an Ops/Hub console on one REST API.',
      'Built Telegram alerts, hourly reminders, photo and voice attachments, a time-based escalation ladder, and a 10-minute auto-sync that moves tickets from Open to Resolved.',
    ],
    features: ['Raise-issue form', 'Telegram alerts & reminders', 'Time-based escalation ladder', '10-minute auto-sync'],
    metrics: [
      { value: '10 min', label: 'Auto-sync, Open → Resolved' },
      { value: '0', label: 'Tickets tracked by hand since' },
    ],
    live: 'https://central-issues-escalation-form.onrender.com/',
    github: 'https://github.com/BossNAHID/AD-Issues-Escalation-FORM',
    motif: 'flow',
  },
  {
    id: 'ad-crm',
    index: '03',
    title: 'AD CRM',
    year: '2026',
    kind: 'CRM · Call tracking',
    summary:
      'Daily call tracking for the Account Development team: Telegram call alerts, a merchant directory kept in sync with Google Sheets, call records in Turso, and manager performance views.',
    stack: ['Node.js', 'Express', 'Turso', 'Telegram'],
    contribution: [
      'Built daily call tracking with Telegram call alerts for the Account Development team.',
      'Kept the merchant directory in sync with Google Sheets and added manager performance views on top of the call records.',
    ],
    features: ['Telegram call alerts', 'Google Sheets sync', 'Call records in Turso', 'Manager performance views'],
    metrics: [
      { value: 'Daily', label: 'Call tracking for the AD team' },
      { value: 'Sync', label: 'Merchant directory ↔ Google Sheets' },
    ],
    motif: 'scan',
  },
  {
    id: 'merchant-reply-db',
    index: '04',
    title: 'Merchant Reply DB',
    year: '2026',
    kind: 'Chat dashboard · WhatsApp bridge',
    summary:
      'Telegram-based merchant chat dashboard with two-way replies and automatic extraction of merchant ID and phone number, plus a WhatsApp bridge that sends KAM remarks to the matching merchant group.',
    stack: ['Flask', 'Telegram', 'WhatsApp bridge', 'Render'],
    contribution: [
      'Built the two-way Telegram merchant chat dashboard with automatic extraction of merchant ID and phone number.',
      'Added a WhatsApp bridge that sends KAM remarks to the matching merchant group, so past replies are searchable instead of re-typed from memory.',
    ],
    features: ['Two-way merchant replies', 'Auto-extract merchant ID & phone', 'WhatsApp bridge', 'Searchable reply history'],
    metrics: [
      { value: 'Live', label: 'Hosted on Render' },
      { value: 'Search', label: 'Past replies, not re-typed' },
    ],
    live: 'https://merchant-reply-db.onrender.com/',
    motif: 'tenants',
  },
];

export type TimelineItem = { period: string; title: string; org: string; place?: string; kind: string; points: string[] };

export const timeline: TimelineItem[] = [
  {
    period: 'Jul 2026 — Present',
    title: 'Associate, Account Development (Key Account Manager)',
    org: 'CarryBee Express Ltd.',
    place: 'Dhaka',
    kind: 'Work',
    points: [
      'Manage 731 key merchant and corporate accounts generating about 25,000 parcels a month, as the primary contact for onboarding, pricing, performance reviews and escalations.',
      'Negotiated pricing and contracts with 900 accounts, matching rate cards to each merchant’s volume, shipping mix and growth plans.',
      'Resolve escalations with operations and hub teams by owning each issue from ticket to closure, updating the merchant at every step.',
      'Eliminated manual Google Sheets ticket tracking by building IMAS LITE: three connected apps on one API.',
    ],
  },
  {
    period: 'Jun 2025 — Jul 2026',
    title: 'Associate, Sales (Growth & Partnerships)',
    org: 'CarryBee Express Ltd.',
    place: 'Dhaka',
    kind: 'Work',
    points: [
      'Raised client retention 85% through regular check-ins, proactive follow-up on delayed orders and clear escalation paths.',
      'Onboarded 193 new e-commerce merchants (Facebook sellers, own-site and marketplace sellers), handling outreach, pickup setup and pricing agreement end to end.',
      'Helped merchants decide where to expand or change how they ship, by reviewing their order data and delivery performance.',
    ],
  },
  {
    period: 'Dec 2024 — Jul 2025',
    title: 'Sales & Social Media Development Executive',
    org: 'IFixFast',
    kind: 'Work',
    points: [
      'Grew revenue 35% by driving B2C sales, partnerships and retention initiatives for a mobile repair company.',
      'Boosted social media engagement 85% with targeted Facebook, Instagram and TikTok campaigns, and launched the “Same Day Repair” initiative.',
    ],
  },
  {
    period: 'Jul 2024 — Nov 2024',
    title: 'Team Leader & Telesales Executive',
    org: 'Call Point Business Solutions Ltd.',
    kind: 'Work',
    points: ['Led a sales calling team and made outbound calls, building the target-driven habits used in later account roles.'],
  },
  {
    period: 'Education',
    title: 'BSc in Statistics',
    org: 'National University, Bangladesh',
    kind: 'Education',
    points: ['The data side of account management: dashboards, reporting and root-cause work.'],
  },
];

export type Recognition = { title: string; org: string; detail: string; kind: string; link?: string };

export const recognitions: Recognition[] = [
  {
    title: 'Best Salesperson',
    org: 'CarryBee Express',
    kind: 'Award',
    detail: 'Q3 2026',
  },
  {
    title: 'Emerging Sales Person Award',
    org: 'CarryBee Express',
    kind: 'Award',
    detail: 'Q2 2026',
  },
];

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

/** Which projects use a given skill — used by the Expertise section. */
export function projectsUsing(skill: string): string[] {
  const s = skill.toLowerCase().replace(/\.js$/, '');
  return projects
    .filter((p) => p.stack.some((t) => t.toLowerCase().replace(/\.js$/, '') === s || (s === 'rest apis' && t === 'REST API') || (s === 'telegram bot api' && t === 'Telegram')))
    .map((p) => p.title);
}
