const priceFormatter = new Intl.NumberFormat('es-CR', {
  style: 'currency',
  currency: 'CRC',
  maximumFractionDigits: 0,
  useGrouping: 'always',
});

function formatPrice(value) {
  return priceFormatter.format(value);
}

export default formatPrice;