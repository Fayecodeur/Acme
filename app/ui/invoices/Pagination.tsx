"use client";

import { generatePagination } from "@/app/lib/utils";
import clsx from "clsx";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentPage = Number(searchParams.get("page")) || 1;

  const allPages = generatePagination(currentPage, totalPages);

  const createHref = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", page.toString());
    }
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex items-center gap-1 mt-4">
      {allPages.map((page, index) => {
        if (typeof page === "string") {
          return (
            <span
              key={`dots-${index}`}
              className="w-10 h-10 flex items-center justify-center text-gray-400"
            >
              ...
            </span>
          );
        }

        const isActive = page === currentPage;

        return (
          <Link
            key={page}
            href={createHref(page)}
            className={clsx(
              "w-10 h-10 flex items-center justify-center rounded-md border text-sm font-medium transition-colors",
              isActive
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            )}
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
}
