import { lusitana } from "@/app/ui/font";
import Card from "../ui/Card";
import { FetchCardData } from "../lib/data";

export default async function Dashboard() {
  const { totalPaidInvoices } = await FetchCardData();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl `}>
        Tableau de bord
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Collecté" value={totalPaidInvoices} type="collected" />
      </div>
    </main>
  );
}
