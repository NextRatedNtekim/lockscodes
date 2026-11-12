export const EMAIL = "ntekimnextgenx5@gmail.com";
export const projects = [
  { title: "Magnum Event Rentals", kind: "Booking website", img: "/work/magnum.png", url: "https://www.magnumeventrentals.com/", tags: ["React", "TypeScript", "Tailwind"] },
  { title: "Taskr", kind: "Gamified productivity app", img: "/work/taskr.png", url: "https://taskr-liard.vercel.app", tags: ["React", "Zustand", "Supabase"] },
  { title: "Theorem", kind: "App landing page", img: "/work/theorem.png", url: "https://theorm-landing-page.vercel.app/", tags: ["Next.js", "TypeScript", "Supabase"] },
  { title: "Real Estate", kind: "Property listings", img: "/work/estate.png", url: "https://real-estate-psi-beryl.vercel.app", tags: ["React", "API", "Tailwind"] },
  { title: "Clothing Store", kind: "E-commerce storefront", img: "/work/shop.png", url: "https://shopifydemo-beta.vercel.app/", tags: ["React", "API", "Tailwind"] },
  { title: "Restaurant", kind: "Food ordering", img: "/work/kitchen.png", url: "https://restaurant-demo-nine-opal.vercel.app", tags: ["JavaScript", "API", "Tailwind"] },
];
export const servicesOld = [
  { t: "Websites", d: "Fast, responsive marketing sites and storefronts that load quickly and convert visitors." },
  { t: "Web apps", d: "Dashboards, booking tools and products with auth, a database and real-time features." },
  { t: "Mobile apps", d: "Android apps for study, productivity and service businesses, built to ship." },
  { t: "AI features", d: "Chat, search and automation added to your product where it saves people time." },
];
export const steps = [
  { t: "Discover", d: "A short call to pin down goals, users, scope and deadline." },
  { t: "Design", d: "Wireframes and a clickable prototype, so you approve before code." },
  { t: "Build", d: "Weekly builds you can open and test on a live preview link." },
  { t: "Launch", d: "Deploy, connect your domain, hand over, and stay on for fixes." },
];
export const faqs = [
  ["How long does a project take?", "A focused landing page takes about a week. A full product with auth, a database and real-time features usually takes several weeks. You get a clear timeline after the first call."],
  ["How much does a project cost?", "It depends on scope, features and timeline. Send a short brief and we reply with a fixed quote."],
  ["Do you need a deposit?", "Yes. A 40% deposit starts the project, and the balance is due at launch."],
  ["Do you handle design too?", "Yes. UI/UX direction, branding and front-to-back development come from one team, so you don't coordinate separate designers and developers."],
  ["Can you work remotely?", "Yes. We work fully remote across time zones, with async updates and check-ins that suit you."],
  ["What do you build with?", "React, Next.js, TypeScript, Tailwind, Framer Motion and Supabase for most work. We pick a different tool when it fits better."],
];

export const U = (id: string, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
export const photos = { code: "photo-1498050108023-c5249f4df085", team: "photo-1522071820081-009f0129c71c", desk: "photo-1551434678-e076c223a692", data: "photo-1460925895917-afdab827c52f" };
export const services = [
  { t: "Websites", d: "Fast, responsive sites and storefronts built to turn visitors into customers.", img: "/work/magnum.png", icon: "Globe" },
  { t: "Web apps", d: "Dashboards, booking tools and products with auth, a database and live data.", img: "/work/taskr.png", icon: "LayoutDashboard" },
  { t: "Mobile apps", d: "Android apps for study, productivity and service businesses.", img: "/work/theorem.png", icon: "Smartphone" },
  { t: "AI features", d: "Chat, search and automation added where they save people time.", img: U(photos.code), icon: "Sparkles" },
];
export const why = [
  { t: "Fast delivery", d: "Weekly builds on a live preview link, so you see progress early.", icon: "Zap" },
  { t: "Built to convert", d: "Every layout decision is made to move visitors toward one action.", icon: "MousePointerClick" },
  { t: "Clear communication", d: "Plain timelines and deliverables, with no jargon.", icon: "MessageSquare" },
  { t: "Built to grow", d: "Clean code and structure that can evolve with your business.", icon: "Layers" },
];
