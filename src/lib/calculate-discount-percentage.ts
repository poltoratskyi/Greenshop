export const calculateDiscountPercentage = (price: number, sale: number) => {
  const discount = ((price - sale) / price) * 100;
  return discount.toFixed(0);
};
