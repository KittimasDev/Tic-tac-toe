const toCurrency = (number, fixed = 0) => {
  if (!number && number !== 0) return "";
  number = parseFloat(number.toString());
  let _fixed = Boolean(number % 1 > 0) ? 2 : fixed;

  number = (number || 0).toFixed(_fixed);
  let s = number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return s;
};

export { toCurrency };
