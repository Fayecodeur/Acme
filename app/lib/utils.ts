import { Revenue } from "./definitions";
export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const generateYaxis = (revenue: Revenue[]) => {
  if (revenue.length === 0) return 1000; // Valeur par défaut pour éviter Math.max([])

  const highestRecord = Math.max(...revenue.map((month) => month.revenue));
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;

  return topLabel;
};
