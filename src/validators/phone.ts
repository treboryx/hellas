type PhoneNumberType = "mobile" | "landline" | "";

/**
 * Validates Greek mobile and landline phone numbers.
 *
 * @param {string} value - The phone number to validate.
 * @param {PhoneNumberType} [type] - Optional. The type of phone number to validate ('mobile', 'landline', or ''). Defaults to '' (both).
 * @returns {boolean} - Returns true if the phone number is valid, otherwise false.
 */
export default (value: string, type: PhoneNumberType = ""): boolean => {
  const cleanedValue = value.replace(/[\s\-()\.]/g, "");

  // Validate mobile numbers
  const mobileRegex = /^(\+30|0030)?69\d{8}$/;
  if (type === "mobile" || type === "") {
    if (mobileRegex.test(cleanedValue)) {
      return true;
    }
  }

  // Validate landline numbers with area codes
  const landlineRegex = /^(\+30|0030)?(2\d{9}|801\d{7})$/;
  if (type === "landline" || type === "") {
    if (landlineRegex.test(cleanedValue)) {
      return true;
    }
  }

  return false;
};
