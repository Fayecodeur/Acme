import Breadcrumbs from "@/app/ui/invoices/Breadcrumbs";
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
    </main>
  );
}
