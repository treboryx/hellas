/**
 * Validates Greek mobile and landline phone numbers.
 *
 * @param {string} value - The phone number to validate.
 * @returns {boolean} - Returns true if the phone number is valid, otherwise false.
 */
export default (value: string): boolean => {
  const cleanedValue = value.replace(/[\s\-()\.]/g, "");

  // Validate mobile numbers
  const mobileRegex = /^(\+30|0030)?69\d{8}$/;
  if (mobileRegex.test(cleanedValue)) {
    return true;
  }

  // Validate landline numbers with area codes
  const landlineRegex = /^(\+30|0030)?(2\d{9}|801\d{7})$/;
  if (landlineRegex.test(cleanedValue)) {
    return true;
  }

  return false;
};
