/**
 * Basic Greek ID Validator
 * @param {string} ID Greek ID
 * @return {boolean} If it's valid or not
 */
export default (value: string) => {
  // format: 1 or 2 greek letters, 6 digits
  return /[a-zA-Z0-9Ά-ωΑ-ώ\s]{1,2}[0-9]{6}/.test(value);
};
