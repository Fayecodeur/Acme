import { fetchIvoicesPages } from "@/app/lib/data";
import { lusitana } from "@/app/ui/font";
import CreateInvoices from "@/app/ui/invoices/Buttons";
import Pagination from "@/app/ui/invoices/Pagination";
import InvoicesTable from "@/app/ui/invoices/Table";
import Search from "@/app/ui/Search";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";

export default async function Factures({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const { query = "", page = "1" } = await searchParams;
  const currentPage = Number(page);
  const totalPages = await fetchIvoicesPages(query);

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Factures</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Rechercher des factures" />
        <CreateInvoices />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <InvoicesTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
