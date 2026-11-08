export const CURRENCY = "GH₵";

/**
 * Format a number as a Ghana Cedi amount, e.g. formatPrice(85) -> "GH₵ 85.00".
 */
export function formatPrice(value) {
  const amount = Number(value);

  if (!Number.isFinite(amount)) {
    return `${CURRENCY} 0.00`;
  }

  return `${CURRENCY} ${amount.toFixed(2)}`;
}
