"use client";
import { createInvoice } from "@/app/lib/actions";
import { CustomerField } from "@/app/lib/definitions";
import { Button } from "@/app/ui/Button";
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useActionState } from "react";
export default function CreateForm({
  customers,
}: {
  customers: CustomerField[];
}) {
  const initialState = {
    message: "",
    error: {},
  };
  const [state, formAction] = useActionState(createInvoice, initialState);
  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6 shadow-sm">
        {/* Nom du client */}
        <div className="mb-4">
          <label
            htmlFor="customer"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Sélectionner un client
          </label>
          <div className="relative">
            <select
              id="customer"
              name="customerId"
              className="peer block w-full rounded-md border border-gray-200 bg-white py-2 pl-10 pr-3 text-sm text-gray-700 placeholder:text-gray-400 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              defaultValue=""
              aria-describedby="customer-error"
            >
              <option value="" disabled>
                Choisir un client
              </option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400" />
          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.error?.customerId &&
              state.error.customerId.map((error: string) => (
                <p key={error} className="mt-2 text-sm text-red-500">
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Montant de la facture */}
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Choisir un montant
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="amount"
              name="amount"
              type="number"
              step="0.01"
              placeholder="Entrez un montant en USD"
              className="peer block w-full rounded-md border border-gray-200 bg-white py-2 pl-10 pr-3 text-sm text-gray-700 placeholder:text-gray-400 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              aria-describedby="amount-error"
            />
            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-blue-500" />
          </div>
          <div id="amount-error" aria-live="polite" aria-atomic="true">
            {state.error?.amount &&
              state.error.amount.map((error: string) => (
                <p key={error} className="mt-2 text-sm text-red-500">
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Statut de la facture */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium text-gray-700">
            Définir le statut de la facture
          </legend>
          <div className="rounded-md border border-gray-100 bg-white px-[14px] py-3 shadow-sm">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"
                  aria-describedby="status-error"
                  className="h-4 w-4 cursor-pointer border-gray-300 text-blue-500 focus:ring-blue-400"
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  En attente <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="paid"
                  name="status"
                  type="radio"
                  value="paid"
                  aria-describedby="status-error"
                  className="h-4 w-4 cursor-pointer border-gray-300 text-green-600 focus:ring-green-400"
                />
                <label
                  htmlFor="paid"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Payé <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
          <div id="status-error" aria-live="polite" aria-atomic="true">
            {state.error?.status &&
              state.error.status.map((error: string) => (
                <p key={error} className="mt-2 text-sm text-red-500">
                  {error}
                </p>
              ))}
          </div>
        </fieldset>
        <div aria-live="polite" aria-atomic="true">
          {state.message ? (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Annuler
        </Link>
        <Button type="submit" chilildren={undefined}>
          Créer une facture
        </Button>
      </div>
    </form>
  );
}
