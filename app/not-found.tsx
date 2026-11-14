import Link from "next/link";
export default function NotFound() {
  return (<main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
    <p className="font-display text-[clamp(6rem,30vw,16rem)] font-extrabold leading-none text-lime">404</p>
    <p className="mt-4 text-lg text-white/60">This page doesn't exist.</p>
    <Link href="/" className="mt-8 rounded-full bg-white px-7 py-4 font-semibold text-black">Back home</Link>
  </main>);
}
