import { toString } from "./convert";

/**
 * @param {string} str
 * @returns {string}
 */
export function encode(str: string): string {
  const replace: Record<string, string> = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\x00",
  };
  return encodeURIComponent(str).replace(
    /[!'\\(\\)~]|%20|%00/g,
    (match: string) => replace[match]
  );
}

/**
 * @param {string} str
 * @returns {string}
 */
export function decode(str: string): string {
  return toString(str)
    .replace(/[ +]/g, "%20")
    .replace(/(%[a-f0-9]{2})+/gi, match => decodeURIComponent(match));
}
