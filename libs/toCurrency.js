const toCurrency = (number, fixed = 0) => {
  if (!number && number !== 0)
    return '';

  number = parseFloat(number.toString())
  number = (number || 0).toFixed(fixed);
  let s = number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return s
}

export {
  toCurrency
}