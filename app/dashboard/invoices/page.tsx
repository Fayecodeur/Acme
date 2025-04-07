import { lusitana } from "@/app/ui/font";
import CreateInvoices from "@/app/ui/invoices/Buttons";
import Search from "@/app/ui/Search";

export default async function Factures() {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Factures</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Rechercher des factures" />
        <CreateInvoices />
      </div>
    </div>
  );
}
