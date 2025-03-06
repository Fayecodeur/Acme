import { lusitana } from "./ui/font";
import Image from "next/image";
import Logo from "./ui/Logo";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <Logo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-10 ">
          <p
            className={`${lusitana.className}text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Bienvenue</strong>
          </p>
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
