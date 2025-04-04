import { Revenue } from "@/app/lib/definitions";
import { fetchRevenue } from "@/app/lib/data";
import { generateYaxis } from "@/app/lib/utils";
import { lusitana } from "@/app/ui/font";
import { CalendarIcon } from "@heroicons/react/24/outline";

export default async function RevenueChart() {
  const revenue = await fetchRevenue();

  const chartHeight = 350;
  const topLabel = generateYaxis(revenue);

  if (!revenue || revenue.length === 0) {
    return <div className="mt-4 text-gray-400">Pas de données disponibles</div>;
  }

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Revenus récents
      </h2>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="sm:grid-cols-12 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
          {revenue.map((month) => {
            const heightValue = Math.max(
              (chartHeight / topLabel) * month.revenue,
              20
            ); // Hauteur min 20px
            console.log(
              `Mois: ${month.month}, Revenu: ${month.revenue}, Hauteur: ${heightValue}px`
            );

            return (
              <div
                key={month.month}
                className="flex flex-col items-center gap-2"
              >
                <div
                  className="w-6 rounded-md bg-blue-400"
                  style={{
                    height: `${heightValue}px`,
                  }}
                ></div>
                <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
                  {month.month}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500">12 derniers mois</h3>
        </div>
      </div>
    </div>
  );
}
