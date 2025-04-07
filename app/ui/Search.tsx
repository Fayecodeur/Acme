"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search({ placeholder }: { placeholder: string }) {
  function handleChange(term: string) {
    console.log(term);
  }
  return (
    <div className="relative flex flex-1 shrink-0">
      <label htmlFor="search" className="sr-only">
        Rechercher
      </label>
      <input
        type="text"
        id="search"
        className="peer block w-full rounded-md border border-gray-300 focus:border-gray-500 focus:ring-1 focus:ring-blue-500 py-2 pl-10 text-sm outline-none placeholder:text-gray-500 transition-all duration-150"
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
