import { Work, Quote } from "@/components/sections";
export const metadata = { title: "Work | LocksCodes" };
export default function Projects() {
  return (<main>
    <section className="mx-auto max-w-6xl px-6 pb-8 pt-36 md:pt-40">
      <h1 className="font-display text-5xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl">Our work</h1>
      <p className="mt-6 max-w-md text-lg text-white/60">Websites and apps we've shipped. Click a project to open the live site.</p>
      <div className="mt-14"><Work /></div>
    </section>
    <Quote />
  </main>);
}
