import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";
import { lusitana } from "@/app/ui/font";

interface data {
  title: string;
  value: number | string;
  type: "invoices" | "customers" | "pending" | "collected";
}
const iconMap = {
  invoices: InboxIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  collected: BanknotesIcon,
};
export default function Card({ title, value, type }: data) {
  const Icon = iconMap[type];
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className} truncate rounded-xl bg-white p-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
