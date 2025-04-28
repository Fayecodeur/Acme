import Breadcrumbs from "@/app/ui/invoices/Breadcrumbs";
import CreateForm from "@/app/ui/invoices/CreateForm";
import { fetchCustomers } from "@/app/lib/data";

export default async function page() {
  const customers = await fetchCustomers();
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Facture", href: "/dashboard/invoices" },
          {
            label: "Créer une facture",
            href: "/dashboard/invoices/create",
            active: true,
          },
        ]}
      />
      <CreateForm customers={customers} />
    </main>
  );
}
