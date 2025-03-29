import { sql } from "@vercel/postgres";
import { formatCurrency } from "./utils";

export async function FetchCardData() {
  try {
    const invoicesCountPromise = sql`SELECT COUNT (*) FROM invoices`;
    const customersCountPromise = sql`SELECT COUNT (*) FROM customers`;

    const invoicesStatusPromise = sql`SELECT
        SUM(CASE WHEN status = 'paid' THEN amount  ELSE 0 END) AS "paid",
        SUM(CASE WHEN status = 'pending' THEN amount  ELSE 0 END) AS "pending"
        FROM invoices
    `;
    const data = await Promise.all([
      invoicesCountPromise,
      customersCountPromise,
      invoicesStatusPromise,
    ]);
    const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? "0");
    return { totalPaidInvoices };
  } catch (error) {
    console.error("Database error", error);
    throw new Error("Echec lors de la récupération des données...");
  }
}
