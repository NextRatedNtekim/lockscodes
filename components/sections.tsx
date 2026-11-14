"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useScroll, useTransform, useMotionTemplate, useInView, animate } from "motion/react";
import { Globe, LayoutDashboard, Smartphone, Sparkles, Zap, MousePointerClick, MessageSquare, Layers, ArrowUpRight, Plus, Send, Phone, Mail, Code2, Loader2, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";
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
      <nav className="flex w-full max-w-2xl items-center justify-between rounded-full border border-white/10 bg-black/60 py-2 pl-5 pr-2 backdrop-blur-xl">
        <Link href="/" className="font-display text-lg font-bold sm:text-xl">LocksCodes<span className="text-lime">.</span></Link>
        <div className="flex items-center gap-3 text-sm text-white/70 sm:gap-6">
          <Link href="/projects" className="hover:text-white">Work</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/#faq" className="hidden hover:text-white md:block">FAQ</Link>
          <Link href="/contact" className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 font-semibold text-black transition hover:bg-lime sm:px-5"><span className="sm:hidden">Contact</span><span className="hidden sm:inline">Start a project</span> <Phone size={15} /></Link>
        </div>
      </nav>
    </motion.header>
  );
}

export function Badge() {
  return (
    <div className="relative h-36 w-36 shrink-0 md:h-44 md:w-44">
      <motion.svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" animate={{ rotate: 360 }} transition={{ duration: 22, ease: "linear", repeat: Infinity }}>
        <defs><path id="ring" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" /></defs>
        <text className="fill-white/70 text-[15px] font-semibold uppercase tracking-[.2em]"><textPath href="#ring">Founder · Samuel Ntekim · LocksCodes ·</textPath></text>
      </motion.svg>
      <motion.span animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 3, repeat: Infinity }} className="absolute inset-[28%] flex items-center justify-center rounded-full bg-lime text-black"><Code2 size={34} /></motion.span>
    </div>
  );
}

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -90]), o = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const thumbs = [...projects, ...projects];
  return (
    <section ref={ref} className="relative overflow-hidden pt-32 md:pt-40">
      <motion.div aria-hidden animate={{ x: [0, 60, -30, 0], y: [0, 40, -20, 0] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }} className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-lime/20 blur-[110px] md:h-[30rem] md:w-[30rem]" />
      <motion.div style={{ y, opacity: o }} className={`${wrap} relative`}>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/70"><span className="h-2 w-2 animate-pulse rounded-full bg-lime" /> Web and app agency</motion.p>
        <h1 aria-label="LocksCodes" className="font-display text-[clamp(3rem,15vw,12rem)] font-extrabold leading-[.9] tracking-tighter">
          {"LocksCodes".split("").map((c, i) => (
            <span key={i} aria-hidden className="inline-block overflow-hidden pb-[.1em] align-bottom">
              <motion.span className={`inline-block ${i > 4 ? "text-lime" : ""}`} initial={{ y: "115%", rotate: 8 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 1, ease, delay: 0.25 + i * 0.05 }}>{c}</motion.span>
            </span>))}
        </h1>
        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8, ease }}>
            <p className="max-w-lg text-lg leading-relaxed text-white/60">Founded by Samuel Ntekim. We ship websites and apps for businesses that want to look credible and move fast.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="flex items-center gap-2 rounded-full bg-lime px-7 py-4 font-semibold text-black transition hover:scale-105">Start a project <Send size={17} /></Link>
              <Link href="/projects" className="flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:scale-105">See our work <ArrowUpRight size={18} /></Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.6, rotate: -40 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 1.1, duration: 1, ease }}><Badge /></motion.div>
        </div>
      </motion.div>
      <div className="mt-16 overflow-hidden pb-4" aria-hidden>
        <motion.div className="flex w-max gap-4" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 40, ease: "linear", repeat: Infinity }}>
          {thumbs.map((p, i) => <img key={i} src={p.img} alt="" className="h-36 w-56 rounded-2xl border border-white/10 object-cover object-top md:h-48 md:w-72" />)}
        </motion.div>
      </div>
    </section>
  );
}

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [v, setV] = useState([0, 0, 0]);
  const t = [4, 6, 4];
  useEffect(() => { if (!inView) return; const c = animate(0, 1, { duration: 1.6, ease, onUpdate: (p) => setV(t.map((n) => Math.round(n * p))) }); return () => c.stop(); }, [inView]);
  const l = ["Years building", "Projects shipped", "Service areas"];
  return (
    <section ref={ref} className={`${wrap} py-16`}>
      <div className="grid grid-cols-3 gap-4 border-y border-line py-10 text-center">
        {l.map((x, i) => (<div key={x}><p className="font-display text-4xl font-extrabold text-lime md:text-7xl">{v[i]}{i === 0 ? "+" : ""}</p><p className="mt-1 text-xs text-white/60 md:text-base">{x}</p></div>))}
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
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 font-semibold text-black transition hover:scale-105">Request a quote <Send size={17} /></Link></div>
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
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const field = "w-full rounded-xl border border-white/15 !bg-black px-4 py-3 outline-none transition focus:border-black";
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget, f = new FormData(form);
    const svc = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, tpl = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!svc || !tpl || !key) return setStatus("error");
    setStatus("sending");
    try {
      await emailjs.send(svc, tpl, { from_name: f.get("name"), reply_to: f.get("email"), project_type: f.get("type"), message: f.get("details") }, { publicKey: key });
      setStatus("sent"); form.reset();
    } catch { setStatus("error"); }
  }
  return (
    <section id="brief" className="px-4 py-20">
      <motion.div {...reveal} className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] bg-lime p-6 text-black md:grid-cols-2 md:gap-12 md:p-14">
        <div><h2 className="font-display text-4xl font-extrabold leading-[.95] tracking-tighter sm:text-5xl md:text-7xl">Have something to launch?</h2>
          <p className="mt-6 max-w-sm text-lg text-black/70">Share a few details. We'll reply with questions, a plan and a quote.</p>
          <p className="mt-8 flex items-center gap-2 break-all font-medium"><Mail size={18} className="shrink-0" /> {EMAIL}</p></div>
        <form onSubmit={submit} className="space-y-3 text-white">
          <input required name="name" placeholder="Your name" className={field} />
          <input required type="email" name="email" placeholder="Email address" className={field} />
          <select name="type" className={field}>{["Website", "Web app", "Mobile app", "AI feature", "Not sure yet"].map((o) => <option key={o}>{o}</option>)}</select>
          <textarea required name="details" rows={4} placeholder="What are you building, and by when?" className={field} />
          <button disabled={status === "sending"} className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-7 py-4 font-semibold transition hover:scale-[1.02] disabled:opacity-60">
            {status === "sending" ? <><Loader2 size={17} className="animate-spin" /> Sending</> : <>Send brief <Send size={17} /></>}</button>
          <AnimatePresence mode="wait">
            {status === "sent" && <motion.p key="s" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 font-medium text-black"><CheckCircle2 size={18} /> Sent. We'll reply by email soon.</motion.p>}
            {status === "error" && <motion.p key="e" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="font-medium text-black">Couldn't send. Please email {EMAIL} directly.</motion.p>}
          </AnimatePresence>
        </form>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className={`${wrap} flex flex-col justify-between gap-6 border-t border-line py-10 text-sm text-white/50 md:flex-row`}>
      <p>© {new Date().getFullYear()} LocksCodes. Founded by Samuel Ntekim.</p>
      <p className="flex flex-wrap gap-x-6 gap-y-2"><Link className="hover:text-lime" href="/projects">Work</Link><Link className="hover:text-lime" href="/about">About</Link><Link className="hover:text-lime" href="/contact">Contact</Link><a className="hover:text-lime" href="https://github.com/underrated-lx">GitHub</a><a className="hover:text-lime" href="https://x.com/underrated_lx">X</a></p>
    </footer>
  );
}
