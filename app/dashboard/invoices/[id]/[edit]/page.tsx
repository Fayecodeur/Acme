import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/Breadcrumbs";
import EditForm from "@/app/ui/invoices/EditForm";
import { notFound } from "next/navigation";

interface EditPageProps {
  params: {
    id: string;
  };
}

export default async function Edit({ params }: EditPageProps) {
  const id = params.id;

  const [invoice, customer] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Factures", href: "/dashboard/invoices" },
          {
            label: "Modifier la factures",
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditForm invoice={invoice} customers={customer} />
    </main>
  );
}
