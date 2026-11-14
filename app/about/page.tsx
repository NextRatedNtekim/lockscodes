import { Badge, Stats, Why, Quote } from "@/components/sections";
export const metadata = { title: "About | LocksCodes" };
const stack = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase", "Node.js", "Zustand"];
export default function About() {
  return (<main>
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-8 pt-36 md:grid-cols-[1.4fr_1fr] md:pt-40">
      <div>
        <h1 className="font-display text-5xl font-extrabold leading-[.95] tracking-tighter sm:text-7xl">About LocksCodes</h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">LocksCodes is a web and app agency founded by Samuel Ntekim, a self-taught full stack developer and AI engineer with four years of experience.</p>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/60">Samuel's background is in Civil and Structural Engineering, and that engineer's eye for structure carries into every build: plan the foundations first, then finish. Work is done remotely.</p>
        <div className="mt-8 flex flex-wrap gap-2">{stack.map((t) => <span key={t} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70">{t}</span>)}</div>
      </div>
      <div className="flex justify-center md:justify-end"><Badge /></div>
    </section>
    <Stats /><Why /><Quote />
  </main>);
}
