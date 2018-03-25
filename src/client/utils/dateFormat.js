export default (date, format) => (
  new Intl.DateTimeFormat(format).format(new Date(date))
);
