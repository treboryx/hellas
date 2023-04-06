/**
 * Greek Postal Code Validator
 * @param {string} Code Greek Postal Code
 * @return {boolean} If it's valid or not
 */
export default (value: string): boolean => {
  // must be 5 digits
  // must not start with 0 or 9
  if (
    value.length !== 5 ||
    value.startsWith("0") ||
    value.startsWith("9") ||
    isNaN(+value)
  )
    return false;

  return true;
};
