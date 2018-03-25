export default (locale, currency, number) => (
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(number)
);
