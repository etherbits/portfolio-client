import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-indigo-950 to-neutral-950 from-0% to-100%">
      <div className="absolute left-0 top-0 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl w-96 h-96 bg-indigo-600" />
      <Image
        width={3008}
        height={2000}
        src="/images/glass-noise.jpg"
        alt="background texture"
        className="absolute min-h-screen opacity-5 mix-blend-overlay"
      />
      <div className="flex flex-col gap-8">
        <h2 className="text-slate-300 text-3xl">
          Hi, I&apos;m{" "}
          <span className="text-indigo-400 font-bold">Nika Qvrivishvili</span>
          <br /> a full-stack web developer.
        </h2>
        <button className="bg-transparent w-fit px-4 py-2 border-2 border-indigo-400 text-lg rounded-sm text-indigo-400">
          Learn More
        </button>
      </div>
    </main>
  );
}
