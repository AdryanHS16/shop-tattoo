import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import tattooImage from "@/app/_assets/img_tatoo.png";

export default function Contato() {
  return (
    <main className="flex gap-1 justify-between">
      <section className="">
        <h1 className="text-3xl font-black mt-12">
          Entre em <span className="text-yellow-400">Contato</span>
        </h1>
        <p className="mt-10 font-light text-zinc-400">
          Clique no botão abaixo e envie uma mensagem. <br />
          Vamos conversar!
        </p>
        <Link href="https://wa.me/5562999999999">
          <button className="bg-zinc-700 p-4 border-b-4 border-zinc-800 rounded flex items-center gap-4 mt-10">
            <FaWhatsapp className="w-8 h-8" />
            <div>
              <p>Enviar Mensagem</p>
              <p className="text-zinc-500 text-xs">(+55 62 99228 0073)</p>
            </div>
          </button>
        </Link>
      </section>
      <Image
        width="700"
        src={tattooImage}
        alt="Sandro Luz fazendo uma tatuagem"
      />
    </main>
  );
}
