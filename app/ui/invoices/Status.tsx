import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";

export default function InvoicesStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-1 text-xs",
        {
          "bg-gray-100 text-gray-500": status === "pending",
          "bg-green-500 text-white": status === "paid",
        }
      )}
    >
      {status === "pending" ? (
        <>
          En attente
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : (
        <>
          Payé
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      )}
    </span>
  );
}
