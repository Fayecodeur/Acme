"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: "Veuillez sélectionner un client",
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: "Veuillez entrer un montant supérieur à $0" }),
  date: z.string(),
  status: z.enum(["paid", "pending"], {
    invalid_type_error: "Veuillez sélectionner le status de la facture",
  }),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateteInvoice = FormSchema.omit({ id: true, date: true });

export type State = {
  error?: {
    cuscustomerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createInvoice(prevState: State, formData: FormData) {
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      message: "Champs manquants. Echec lors de la création de la facture",
    };
  }

  const { customerId, amount, status } = validatedFields.data;

  const amountInCents = amount * 100;
  const date = new Date().toISOString().split("T")[0];

  try {
    await sql`INSERT INTO invoices (customer_id, amount, status, date)
              VALUES(${customerId}, ${amountInCents}, ${status}, ${date})`;
  } catch (error) {
    return { message: "Erreur lors de la création de la facture" };
  }

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });

  const amountInCents = amount * 100;

  try {
    await sql`
    UPDATE invoices 
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;
  } catch (error) {
    return { message: "Erreur lors de la mise à jour de la facture" };
  }

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

export async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath("/dashboard/invoices");
  } catch (error) {
    return { message: "Erreur lors de la suppréssion de la facture" };
  }
}
