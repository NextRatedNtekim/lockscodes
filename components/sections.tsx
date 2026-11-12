"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useScroll, useTransform, useMotionTemplate } from "motion/react";
import { Globe, LayoutDashboard, Smartphone, Sparkles, Zap, MousePointerClick, MessageSquare, Layers, ArrowUpRight, Plus, Send, Phone, Mail } from "lucide-react";
import { EMAIL, projects, services, steps, faqs, why, U, photos } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;
const wrap = "mx-auto w-full max-w-6xl px-6";
const icons: Record<string, React.ElementType> = { Globe, LayoutDashboard, Smartphone, Sparkles, Zap, MousePointerClick, MessageSquare, Layers };
const hide = (e: React.SyntheticEvent<HTMLImageElement>) => (e.currentTarget.style.display = "none");
const H2 = ({ children }: { children: React.ReactNode }) => <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">{children}</h2>;
const reveal = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.8, ease } };

export function Nav() {
  return (
    <motion.header initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease, delay: 0.2 }} className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-2xl items-center justify-between rounded-full border border-white/10 bg-black/60 py-2 pl-6 pr-2 backdrop-blur-xl">
        <Link href="/" className="font-display text-xl font-bold">LocksCodes<span className="text-lime">.</span></Link>
        <div className="flex items-center gap-6 text-sm text-white/70">
          <Link href="/projects" className="hidden hover:text-white sm:block">Work</Link>
          <Link href="/#services" className="hidden hover:text-white sm:block">Services</Link>
          <Link href="/#faq" className="hidden hover:text-white md:block">FAQ</Link>
          <Link href="/#brief" className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-semibold text-black transition hover:bg-lime">Start a project <Phone size={15} /></Link>
        </div>
      </nav>
    </motion.header>
  );
}

export function Hero() {
  const mx = useMotionValue(0), my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 60, damping: 15 }), y = useSpring(my, { stiffness: 60, damping: 15 });
  const rx = useTransform(y, [-1, 1], [8, -8]), ry = useTransform(x, [-1, 1], [-10, 10]);
  const cards = ["/work/magnum.png", "/work/taskr.png", "/work/theorem.png"];
  return (
    <section onPointerMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); mx.set(((e.clientX - r.left) / r.width) * 2 - 1); my.set(((e.clientY - r.top) / r.height) * 2 - 1); }}
      className="relative overflow-hidden pb-24 pt-36">
      <div className="absolute right-[-10%] top-10 h-[34rem] w-[34rem] rounded-full bg-lime/20 blur-[120px]" />
      <div className={`${wrap} relative grid items-center gap-16 lg:grid-cols-[1.1fr_.9fr]`}>
        <div>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/70">
            <span className="h-2 w-2 rounded-full bg-lime" /> Web and app agency, founded by Samuel Ntekim
          </motion.p>
          <h1 className="font-display text-[clamp(3rem,7.5vw,6.5rem)] font-extrabold leading-[.95] tracking-tighter">
            {["We ship websites", "and apps that", "get used."].map((l, i) => (
              <span key={l} className="block overflow-hidden pb-[.08em]">
                <motion.span className="block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, ease, delay: 0.3 + i * 0.12 }}>{l}</motion.span>
              </span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8, ease }} className="mt-8 max-w-md text-lg leading-relaxed text-white/60">
            We design, build and launch websites, web apps and mobile apps for businesses that want to look credible and move fast.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.8, ease }} className="mt-10 flex flex-wrap gap-3">
            <Link href="/#brief" className="flex items-center gap-2 rounded-full bg-lime px-7 py-4 font-semibold text-black transition hover:scale-105">Send a project brief <Send size={17} /></Link>
            <Link href="/projects" className="flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:scale-105">See our work <ArrowUpRight size={18} /></Link>
          </motion.div>
        </div>
        <motion.div style={{ rotateX: rx, rotateY: ry, perspective: 1000 }} className="relative hidden h-[30rem] lg:block">
          {cards.map((src, i) => (
            <motion.img key={src} src={src} alt="" initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: [0, -12, 0] }}
              transition={{ opacity: { delay: 0.8 + i * 0.2 }, y: { duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 } }}
              className="absolute w-72 rounded-2xl border border-white/10 object-cover shadow-2xl" style={{ top: i * 100, left: i % 2 ? 0 : 110, zIndex: i, aspectRatio: "16/10" }} />
          ))}
          {[Zap, Smartphone, Sparkles].map((I, i) => (
            <motion.span key={i} animate={{ y: [0, 10, 0] }} transition={{ duration: 4 + i, repeat: Infinity }} className="absolute z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-lime text-black" style={{ top: 10 + i * 140, right: i % 2 ? 0 : 30 }}><I size={24} /></motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Marquee() {
  const items = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase", "Node.js", "Android", "AI"];
  return (
    <div className="overflow-hidden border-y border-line py-5" aria-hidden>
      <motion.div className="flex w-max gap-12 font-display text-3xl font-bold text-white/25" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 30, ease: "linear", repeat: Infinity }}>
        {[...items, ...items, ...items, ...items].map((t, i) => <span key={i}>{t}</span>)}
      </motion.div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className={`${wrap} py-28`}>
      <motion.div {...reveal}><H2>What we do</H2><p className="mt-4 max-w-md text-lg text-white/60">We design and build products that look good, load fast and do their job.</p></motion.div>
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {services.map((s, i) => { const I = icons[s.icon]; return (
          <motion.div key={s.t} {...reveal} transition={{ ...reveal.transition, delay: (i % 2) * 0.1 }} whileHover={{ y: -6 }} className="group overflow-hidden rounded-3xl border border-line bg-white/[.03] p-6">
            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-lime text-black"><I size={22} /></span>
            <h3 className="font-display text-3xl font-bold">{s.t}</h3>
            <p className="mt-2 max-w-sm text-white/60">{s.d}</p>
            <div className="mt-6 overflow-hidden rounded-2xl"><img src={s.img} alt="" onError={hide} className="aspect-[16/9] w-full object-cover object-top transition duration-700 group-hover:scale-105" /></div>
          </motion.div>); })}
      </div>
    </section>
  );
}

export function Work({ limit }: { limit?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.slice(0, limit).map((p, i) => (
        <motion.a key={p.title} href={p.url} target="_blank" rel="noreferrer" {...reveal} transition={{ ...reveal.transition, delay: (i % 2) * 0.1 }} className="group block">
          <div className="relative overflow-hidden rounded-3xl border border-line">
            <img src={p.img} alt={p.title} className="aspect-[4/3] w-full object-cover object-top transition duration-700 group-hover:scale-105" />
            <span className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-lime text-black opacity-0 transition duration-300 group-hover:opacity-100"><ArrowUpRight /></span>
          </div>
          <div className="mt-4 flex items-start justify-between">
            <div><h3 className="font-display text-2xl font-bold">{p.title}</h3><p className="text-white/50">{p.kind}</p></div>
            <p className="hidden text-sm text-white/40 sm:block">{p.tags.join(" · ")}</p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}

export function WorkSection() {
  return (
    <section id="work" className={`${wrap} py-24`}>
      <div className="mb-12 flex items-end justify-between"><H2>Selected work</H2>
        <Link href="/projects" className="flex items-center gap-1 rounded-full border border-white/20 px-5 py-3 text-sm hover:bg-white/10">View all <ArrowUpRight size={16} /></Link></div>
      <Work limit={4} />
    </section>
  );
}

export function Process() {
  return (
    <section className={`${wrap} py-24`}>
      <motion.div {...reveal}><H2>Our process</H2><p className="mt-4 max-w-md text-lg text-white/60">A simple process that moves fast without cutting quality.</p></motion.div>
      <div className="mt-14 grid gap-5 md:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div key={s.t} {...reveal} transition={{ ...reveal.transition, delay: i * 0.12 }} className="rounded-3xl border border-line p-6">
            <p className="font-display text-5xl font-bold text-lime">0{i + 1}.</p>
            <h3 className="mt-10 font-display text-2xl font-bold">{s.t}</h3>
            <p className="mt-2 text-white/60">{s.d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Statement() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const words = "We build websites and apps designed to drive real results. Send us a brief and we'll reply with a clear plan.".split(" ");
  const Img = ({ id, r }: { id: string; r: string }) => <img src={U(id, 300)} alt="" onError={hide} className={`mx-2 inline-block h-[.9em] w-[1.6em] rounded-full object-cover align-middle ${r}`} />;
  return (
    <section ref={ref} className={`${wrap} py-28`}>
      <p className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
        {words.map((w, i) => { const o = useTransform(scrollYProgress, [i / words.length, (i + 1) / words.length], [0.2, 1]); return (
          <span key={i}><motion.span style={{ opacity: o }}>{w}</motion.span>{i === 4 && <Img id={photos.team} r="" />}{i === 10 && <Img id={photos.desk} r="" />}{" "}</span>); })}
      </p>
    </section>
  );
}

export function Why() {
  return (
    <section className={`${wrap} py-24`}>
      <motion.div {...reveal}><H2>Why choose us?</H2></motion.div>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {why.map((w, i) => { const I = icons[w.icon]; return (
          <motion.div key={w.t} {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }} whileHover={{ y: -6 }} className="rounded-3xl border border-line bg-white/[.03] p-6">
            <I className="text-lime" size={30} /><h3 className="mt-8 font-display text-xl font-bold">{w.t}</h3><p className="mt-2 text-white/60">{w.d}</p>
          </motion.div>); })}
      </div>
    </section>
  );
}

export function Quote() {
  return (
    <section className={`${wrap} py-24`}>
      <motion.div {...reveal} className="grid items-center gap-10 rounded-[2rem] border border-line bg-white/[.03] p-8 md:grid-cols-2 md:p-14">
        <div><H2>Every project is quoted</H2><p className="mt-5 max-w-md text-lg text-white/60">No fixed plans. Tell us what you need and we'll send a clear quote with scope, timeline and deliverables.</p>
          <Link href="/#brief" className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 font-semibold text-black transition hover:scale-105">Request a quote <Send size={17} /></Link></div>
        <img src={U(photos.data, 900)} alt="" onError={hide} className="aspect-[4/3] w-full rounded-2xl object-cover" />
      </motion.div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className={`${wrap} py-24`}>
      <H2>Frequently asked questions</H2>
      <div className="mt-12 border-t border-line">
        {faqs.map(([q, a], i) => (
          <div key={q} className="border-b border-line">
            <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-6 py-6 text-left text-xl font-medium">{q}
              <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="text-lime"><Plus /></motion.span></button>
            <AnimatePresence initial={false}>{open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease }} className="overflow-hidden"><p className="max-w-2xl pb-6 text-white/60">{a}</p></motion.div>)}</AnimatePresence>
          </div>))}
      </div>
    </section>
  );
}

export function Brief() {
  const [sent, setSent] = useState(false);
  const field = "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none transition focus:border-lime";
  return (
    <section id="brief" className="px-4 py-24">
      <motion.div {...reveal} className="mx-auto grid max-w-6xl gap-12 rounded-[2rem] bg-lime p-8 text-black md:grid-cols-2 md:p-14">
        <div><h2 className="font-display text-5xl font-extrabold leading-[.95] tracking-tighter md:text-7xl">Have something to launch?</h2>
          <p className="mt-6 max-w-sm text-lg text-black/70">Share a few details. We'll reply with questions, a plan and a quote.</p>
          <p className="mt-8 flex items-center gap-2 font-medium"><Mail size={18} /> {EMAIL}</p></div>
        <form onSubmit={(e) => { e.preventDefault(); const f = new FormData(e.currentTarget);
          window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Project brief from " + f.get("name"))}&body=${encodeURIComponent(`Name: ${f.get("name")}\nEmail: ${f.get("email")}\nProject: ${f.get("type")}\n\n${f.get("details")}`)}`; setSent(true); }} className="space-y-3 text-white">
          <input required name="name" placeholder="Your name" className={`${field} !bg-black`} />
          <input required type="email" name="email" placeholder="Email address" className={`${field} !bg-black`} />
          <select name="type" className={`${field} !bg-black`}>{["Website", "Web app", "Mobile app", "AI feature", "Not sure yet"].map((o) => <option key={o}>{o}</option>)}</select>
          <textarea required name="details" rows={4} placeholder="What are you building, and by when?" className={`${field} !bg-black`} />
          <button className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-7 py-4 font-semibold transition hover:scale-[1.02]">{sent ? "Opening your email app" : "Send brief"} <Send size={17} /></button>
        </form>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className={`${wrap} flex flex-col justify-between gap-4 border-t border-line py-10 text-sm text-white/50 sm:flex-row`}>
      <p>© {new Date().getFullYear()} LocksCodes. Founded by Samuel Ntekim.</p>
      <p className="flex gap-6"><a className="hover:text-lime" href="https://github.com/underrated-lx">GitHub</a><a className="hover:text-lime" href="https://x.com/underrated_lx">X</a></p>
    </footer>
  );
}
