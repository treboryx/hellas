/**
 * Basic Greek Passort Number Validator
 * @param {string} Number Greek Passport Number
 * @return {boolean} If it's valid or not
 */
export default (value: string) => {
  // format: 2 letters, 7 digits - AA1234567
  return /[A-Za-z]{2}[0-9]{7}/.test(value);
};
