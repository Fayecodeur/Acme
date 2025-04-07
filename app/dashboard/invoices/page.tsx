import { lusitana } from "@/app/ui/font";
import CreateInvoices from "@/app/ui/invoices/Buttons";
import InvoicesTable from "@/app/ui/invoices/Table";
import Search from "@/app/ui/Search";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";

export default async function Factures({
  searchParams,
}: {
  searchParams?: { query?: string; page: string };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

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
    </div>
  );
}
