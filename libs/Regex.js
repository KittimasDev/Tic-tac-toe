import size from "lodash/size";

// const regexPassword = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
const RegexPassword = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/);
const RegexNumber = new RegExp(/^[0-9]/);
const RegexComid = new RegExp(/^[0-9]{13}$/);
const RegexPhone = new RegExp(/^(0[0-9]{8,9})$/);
const RegexEmail = new RegExp(
  /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
);
const RegexName = new RegExp(/^[a-zA-Zก-๙\s]+$/i);
const RegexAddress = new RegExp(/^[a-zA-Zก-๙0-9.\/\s]+$/i);

const isComid = value => {
  if (!RegexComid.test(value)) return false;

  let _temp = new Array(13)
    .fill("")
    .map((v, k) => (k < 12 ? Number.parseInt(value[k]) * (13 - k) : 0))
    .reduce((acc, cur) => acc + cur, 0);

  return (11 - (_temp % 11)) % 10 === Number.parseInt(value[size(value) - 1]);
};

export {
  RegexPassword,
  RegexComid,
  RegexPhone,
  RegexEmail,
  RegexNumber,
  RegexName,
  RegexAddress,
  isComid,
};
