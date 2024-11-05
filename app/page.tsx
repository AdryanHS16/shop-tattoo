import Image from "next/image";
import { londrinaSolid } from "./_lib/fonts";
import portrait from "@/app/_assets/Retrato.png";

export default function Home() {
  return (
    <main className="relative flex-1">
      <h1
        className={`absolute -z-10 text-[400px] uppercase text-zinc-800 left-0 top-0 -left-20 leading-tight ${londrinaSolid.className}`}
      >
        Tattoo
      </h1>
      <div className="font-black text-zinc-600 text-8xl pt-56 uppercase">
        <h2>inspire-se</h2>
        <h2>espresse-se</h2>
        <h2 className="text-yellow-400">tatue-se</h2>
      </div>
      <Image
        className="w-96 absolute -right-20 -bottom-20 grayscale"
        src={portrait}
        alt="Retrato de Sandro Luz"
      />
    </main>
  );
}
