"use client";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Acceuil", href: "/dashboard", icon: HomeIcon },
  {
    name: "Factures",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Client", href: "/dashboard/customers", icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div>
      {links.map((link) => {
        const isActive = pathname === link.href; // Vérifie si le lien est actif

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md mb-2 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3 
              ${
                isActive
                  ? "bg-blue-600 text-white" // Style du bouton actif
                  : "bg-gray-50 hover:bg-sky-100 hover:text-blue-600"
              }`}
          >
            <link.icon className="h-5 w-5 md:h-6 md:w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
