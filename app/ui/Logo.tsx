import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "./font";
export default function Logo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center loading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
