import { LatestInvoice } from "@/app/lib/definitions";
import { lusitana } from "@/app/ui/font";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
export default async function LatestInvoices({
  latestInvoices,
}: {
  latestInvoices: LatestInvoice[];
}) {
  return (
    <div className="w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dernière factures
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {latestInvoices.map((invoice, index) => (
            <div
              key={invoice.id}
              className={clsx(
                "flex flex-row items-center justify-between py-4",
                {
                  "border-t": index != 0,
                }
              )}
            >
              <div className="flex items-center">
                <Image
                  src={invoice.image_url}
                  alt={`Photo de profile de ${invoice.name}`}
                  className="mr-4 rounded-full"
                  height={32}
                  width={32}
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold md:text-base">
                    {invoice.name}
                  </p>
                  <p className="hidden text-sm text-gray-500 sm:block">
                    {invoice.email}
                  </p>
                </div>
              </div>
              <div
                className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
              >
                {invoice.amount}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500">Mise à jour maintenant</h3>
        </div>
      </div>
    </div>
  );
}
