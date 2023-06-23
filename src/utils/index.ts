/**
 * Split a string at given indexes
 * @param {string} value String to split
 * @param {number[]} indexes Indexes to split at
 * @return {string[]} Array of strings
 * e.g. splitAt('Halloween', 3, 6, 9) => ['Hal', 'low', 'een']
 */

export const splitAt = (value: string, ...points: number[]): string[] => {
  const parts = [0, ...points].map((p, i) => {
    const n = i >= points.length ? value.length : points[i];
    const np = n < 0 ? value.length + n : n;
    const pp = p < 0 ? value.length + p : p;

    return value.slice(pp, np);
  });

  return parts.filter((v) => v.length !== 0);
};

// Validate date
export const isValidDate = (yy: string, mm: string, dd: string): boolean => {
  const yyN = parseInt(yy, 10);
  const mmN = parseInt(mm, 10) - 1;
  const ddN = parseInt(dd, 10);

  if (isNaN(yyN) || isNaN(mmN) || isNaN(ddN)) {
    return false;
  }

  let d;
  if (yyN < 20) {
    d = new Date(2000 + yyN, mmN, ddN);
  } else if (yyN < 100) {
    d = new Date(1900 + yyN, mmN, ddN);
  } else {
    d = new Date(yyN, mmN, ddN);
  }

  if (isNaN(d.getFullYear())) {
    return false;
  }

  // Date will convert Jan 30 -> Feb 9, make sure this didn't happen
  if (d.getDate() !== ddN || d.getMonth() !== mmN) {
    return false;
  }

  return true;
};

// Validate a compact date (YYMMDD)
export const isValidDateCompactYYMMDD = (yymmdd: string): boolean => {
  const [year, mon, day] = splitAt(yymmdd, 2, 4);

  return isValidDate(year, mon, day);
};

export const isValidDateCompactDDMMYY = (ddmmyy: string): boolean => {
  const [day, mon, year] = splitAt(ddmmyy, 2, 4);

  return isValidDate(year, mon, day);
};

export const isValidDateCompactYYYYMMDD = (yyyymmdd: string): boolean => {
  const [year, mon, day] = splitAt(yyyymmdd, 4, 6);

  return isValidDate(year, mon, day);
};

export const luhnChecksumValidate = (
  value: string,
  digits = "0123456789"
): boolean => {
  const parity = value.length % 2;

  const sum = value
    .split("")
    .map((v) => digits.indexOf(v))
    .reduce((a, c, i) => {
      const v = i % 2 === parity ? c * 2 : c;

      return a + (v > 9 ? v - 9 : v);
    }, 0);

  return sum % digits.length === 0;
};

export const addPrefixForMobile = (number: string): string => {
  const pregix = "+30";
  const cleanedNumber = number.replace(/[\s\-()\.]/g, "");

  // Check if the phone number starts with the Greek international prefix or '0030'
  if (cleanedNumber.startsWith(pregix) || cleanedNumber.startsWith("0030")) {
    return cleanedNumber;
  }

  // If the phone number starts with '69' (mobile), add the international prefix
  if (cleanedNumber.startsWith("69")) {
    return pregix + cleanedNumber;
  }

  // If the phone number doesn't match the expected formats, return the original phone number
  return number;
};

/**
 * Converts Greek text to Greeklish (Greek text written with Latin characters)
 * @param {string} text Greek text to be converted
 * @return {string} Converted Greeklish text
 */
export const greeklish = (text: string): string => {
  const letters: { [key: string]: string } = {
    Ά: "A",
    Α: "A",
    ά: "a",
    α: "a",
    Β: "B",
    β: "b",
    Γ: "G",
    γ: "g",
    Δ: "D",
    δ: "d",
    Έ: "E",
    Ε: "E",
    έ: "e",
    ε: "e",
    Ζ: "Z",
    ζ: "z",
    Ή: "H",
    Η: "H",
    ή: "h",
    η: "h",
    Θ: "Th",
    θ: "th",
    Ί: "I",
    Ι: "I",
    ί: "i",
    ι: "i",
    ΐ: "i",
    ϊ: "i",
    Κ: "K",
    κ: "k",
    Λ: "L",
    λ: "l",
    Μ: "M",
    μ: "m",
    Ν: "N",
    ν: "n",
    Ξ: "X",
    ξ: "x",
    Ό: "O",
    Ο: "O",
    ό: "o",
    ο: "o",
    Π: "P",
    π: "p",
    Ρ: "R",
    ρ: "r",
    Σ: "S",
    σ: "s",
    ς: "s",
    Τ: "T",
    τ: "t",
    Ύ: "Y",
    Υ: "Y",
    ύ: "y",
    υ: "y",
    ΰ: "y",
    ϋ: "y",
    Φ: "F",
    φ: "f",
    Χ: "Ch",
    χ: "ch",
    Ψ: "Ps",
    ψ: "ps",
    Ώ: "O",
    Ω: "O",
    ώ: "o",
    ω: "o",
  };

  // Check if the text contains any Greek characters
  const regex = /[Α-ώ]/;
  if (!regex.test(text)) {
    return text;
  }

  let result = "";

  for (const character of text) {
    if (letters.hasOwnProperty(character)) {
      result += letters[character];
    } else {
      result += character;
    }
  }

  return result;
};
