import moment from "moment";
const _random = size => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = size; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];

  return result;
};

const RandomCartId = () => {
  let _day = moment().format("YYYYMMDDHHMMDD");
  let __random = _random(6);
  return `CLM${_day}${__random}`;
};

const RandomRefid = () => {
  let _day = moment().format("YYYYMMDDHHMMDD");
  let __random5 = _random(5);
  let __random13 = _random(13);
  return `${__random5}${_day}${__random13}`;
};

export { RandomCartId, RandomRefid };
