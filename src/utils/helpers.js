export const formatPrice = (price) => {
  const formatToUsd = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price / 100);
  return formatToUsd;
};
