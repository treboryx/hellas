/**
 * AFM / ΑΦΜ - Αριθμός Φορολογικού Μητρώου - Tax Identification Number
 * Έλεγχος ορθότητας Α.Φ.Μ
 * Greek Tax Identification Number Validator
 * @param {string} value Greek Tax Number - AFM
 * @return {boolean} If it's valid or not
 */
export default (value: string): boolean => {
  // Old format was 8 digits
  if (value.length === 8) value = `0${value}`;
  // Split numbers for iteration
  const arr = value.split("");
  // AFM must be 9 characters long
  if (arr.length !== 9 || value === "000000000") return false;
  // Get last digit for comparison, and parse it into a number
  const last = Number(arr.splice(arr.length - 1, 1)[0]);
  // Get the remainder of the numbers for iteration
  const rest = arr.splice(0, arr.length);
  // Reverse the order of the numbers
  const reversed = rest.reverse();
  // Initialize final variable that will be used later
  let final = 0;
  // Iterate through the numbers and multiply them with the power of 2 of the index
  // n * 2ⁱ + n * 2ⁱ + n * 2ⁱ + n * 2ⁱ + n * 2ⁱ + n * 2ⁱ + n * 2ⁱ + n * 2ⁱ (where n = number, ⁱ = index)
  for (let i = 0; i < reversed.length; i++) {
    // n * 2ⁱ
    const step = Number(reversed[i]) * 2 ** (i + 1);
    final += step;
  }
  // final is the sum of the above iteration
  // if final divided by 11 and that is also divided by 10 is equal to the last digit
  // then we have a valid AFM number
  return (final % 11) % 10 === last;
};
