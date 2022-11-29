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
