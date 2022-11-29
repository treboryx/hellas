const dict = [
  "Α",
  "Β",
  "Ε",
  "Ζ",
  "Η",
  "Ι",
  "Κ",
  "Μ",
  "Ν",
  "Ο",
  "Ρ",
  "Τ",
  "Υ",
  "Χ",
];

/**
 * Greek Vehicle Plate Validator
 * @param {string} Plate Greek Vehicle Plate
 * @return {boolean} If it's valid or not
 */
export default (value: string) => {
  const [prefix, number] = value.split("-");
  if (!prefix || !number) return false;
  if (number.length < 3) return false;
  return prefix.split("").reduce((_p, c, _i) => dict.includes(c), false);
};
