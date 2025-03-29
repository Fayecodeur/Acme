import { lusitana } from "@/app/ui/font";
import Card from "../ui/Card";
import { FetchCardData, fetchRevenue } from "@/app/lib/data";
import RevenueChart from "@/app/ui/revenue-chart";

export default async function Dashboard() {
  const revenue = await fetchRevenue();
  const {
    totalPaidInvoices,
    totalPendigInvoices,
    numberOfInvoices,
    numberOfCustomers,
  } = await FetchCardData();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl `}>
        Tableau de bord
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Collecté" value={totalPaidInvoices} type="collected" />
        <Card title="En attente" value={totalPendigInvoices} type="pending" />
        <Card
          title="Toatal factures"
          value={numberOfInvoices}
          type="invoices"
        />
        <Card
          title="Toatal clients"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
      </div>
    </main>
  );
}
