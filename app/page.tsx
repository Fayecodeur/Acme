import { lusitana } from "./ui/font";
import Image from "next/image";
import Logo from "./ui/Logo";
import Link from "next/link.js";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-48">
        <Logo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-10 ">
          <p
            className={`${lusitana.className}text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Bienvenue chez ACME</strong>
            <br />
            <span>Application de Next.js proposée par Vercel</span>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Connexion</span>

            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            alt="image desktop"
            width={1000}
            height={760}
            className="hidden md:block"
          />
          <Image
            src="/hero-mobile.png"
            alt="image moblie"
            width={560}
            height={620}
            className="block md:hidden"
          />
        </div>
      </div>
    </main>
  );
}
