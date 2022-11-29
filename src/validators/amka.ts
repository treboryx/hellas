import {
  isValidDateCompactYYMMDD,
  luhnChecksumValidate,
  splitAt,
} from "../utils";

/**
 * AMKA - Αριθμός Μητρώου Κοινωνικής Ασφάλισης - Greek Social Security Number
 * Έλεγχος ορθότητας Α.Μ.Κ.Α
 * Greek Social Security Number Validator
 * @param {string} AMKA Greek social security number - AMKA
 * @return {boolean} If it's valid or not
 */
export default (value: string) => {
  // Must be atleast 11 digits
  if (value.length !== 11 || isNaN(+value)) return false;
  // get dd / mm / yy
  const [dd, mm, yy] = splitAt(value, 2, 4, 6);
  // validate it's a date
  if (!isValidDateCompactYYMMDD(`${yy}${mm}${dd}`)) return false;
  // validate luhn checksum
  if (!luhnChecksumValidate(value)) return false;
  // if all checks pass, it's a valid AMKA
  return true;
};

// TODO: test 00000000000
