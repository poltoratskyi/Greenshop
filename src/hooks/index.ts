export function percentValue(price: number, sailPrice: number): string {
  const discount = ((price - sailPrice) / price) * 100;
  return discount.toFixed(0);
}
