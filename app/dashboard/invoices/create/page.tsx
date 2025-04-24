import Breadcrumbs from "@/app/ui/invoices/Breadcrumbs";
import CreateForm from "@/app/ui/invoices/CreateForm";
export default async function page() {
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
      <CreateForm />
    </main>
  );
}
