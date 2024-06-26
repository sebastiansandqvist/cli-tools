// https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797
// https://user-images.githubusercontent.com/12821885/251197668-6d232fa0-f8ad-4cab-8a7a-24b3bb08b481.png
// https://github.com/chalk/chalk/blob/main/source/vendor/ansi-styles/index.js
// https://github.com/lukeed/kleur/blob/master/colors.mjs
// https://github.com/chalk/chalk?tab=readme-ov-file#256-and-truecolor-color-support
// https://github.com/termstandard/colors

const mode = {
  bold: [1, 22], // according to Chalk, 21 isn't widely supported and 22 does the same thing
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  blink: [5, 25],
  inverse: [7, 27],
  invisible: [8, 28],
  strike: [9, 29],
  overline: [53, 55],
} as const;

const ansi = (code: number) => `\u001B[${code}m`;
// const reset = () => ansi(0);

function wrap([open, close]: readonly [number, number], s: string) {
  const ansiOpen = ansi(open);
  const ansiClose = ansi(close);
  const escapedText = s.replaceAll(ansiClose, `${ansiClose}${ansiOpen}`);
  return `${ansiOpen}${escapedText}${ansiClose}`;
}

function wrapAnsi(s: string, ansiOpen: string, ansiClose: string) {
  const escapedText = s.replaceAll(ansiClose, `${ansiClose}${ansiOpen}`);
  return `${ansiOpen}${escapedText}${ansiClose}`;
}

export const bold = (s: string) => wrap(mode.bold, s);
export const dim = (s: string) => wrap(mode.dim, s);
export const italic = (s: string) => wrap(mode.italic, s);
export const underline = (s: string) => wrap(mode.underline, s);
export const blink = (s: string) => wrap(mode.blink, s);
export const inverse = (s: string) => wrap(mode.inverse, s);
export const invisible = (s: string) => wrap(mode.invisible, s);
export const strike = (s: string) => wrap(mode.strike, s);

const color = {
  black: 30,
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
  white: 37,
  default: 39,
};

export const black = (s: string) => wrap([color.black, color.default], s);
export const red = (s: string) => wrap([color.red, color.default], s);
export const green = (s: string) => wrap([color.green, color.default], s);
export const yellow = (s: string) => wrap([color.yellow, color.default], s);
export const blue = (s: string) => wrap([color.blue, color.default], s);
export const magenta = (s: string) => wrap([color.magenta, color.default], s);
export const cyan = (s: string) => wrap([color.cyan, color.default], s);
export const white = (s: string) => wrap([color.white, color.default], s);

const bg = {
  black: 40,
  red: 41,
  green: 42,
  yellow: 43,
  blue: 44,
  magenta: 45,
  cyan: 46,
  white: 47,
  default: 49,
};

export const bgBlack = (s: string) => wrap([bg.black, bg.default], s);
export const bgRed = (s: string) => wrap([bg.red, bg.default], s);
export const bgGreen = (s: string) => wrap([bg.green, bg.default], s);
export const bgYellow = (s: string) => wrap([bg.yellow, bg.default], s);
export const bgBlue = (s: string) => wrap([bg.blue, bg.default], s);
export const bgMagenta = (s: string) => wrap([bg.magenta, bg.default], s);
export const bgCyan = (s: string) => wrap([bg.cyan, bg.default], s);
export const bgWhite = (s: string) => wrap([bg.white, bg.default], s);

const brightColor = {
  black: 90,
  red: 91,
  green: 92,
  yellow: 93,
  blue: 94,
  magenta: 95,
  cyan: 96,
  white: 97,
};

export const brightBlack = (s: string) => wrap([brightColor.black, color.default], s);
export const brightRed = (s: string) => wrap([brightColor.red, color.default], s);
export const brightGreen = (s: string) => wrap([brightColor.green, color.default], s);
export const brightYellow = (s: string) => wrap([brightColor.yellow, color.default], s);
export const brightBlue = (s: string) => wrap([brightColor.blue, color.default], s);
export const brightMagenta = (s: string) => wrap([brightColor.magenta, color.default], s);
export const brightCyan = (s: string) => wrap([brightColor.cyan, color.default], s);
export const brightWhite = (s: string) => wrap([brightColor.white, color.default], s);

const brightBg = {
  black: 100,
  red: 101,
  green: 102,
  yellow: 103,
  blue: 104,
  magenta: 105,
  cyan: 106,
  white: 107,
};

export const bgBrightBlack = (s: string) => wrap([brightBg.black, bg.default], s);
export const bgBrightRed = (s: string) => wrap([brightBg.red, bg.default], s);
export const bgBrightGreen = (s: string) => wrap([brightBg.green, bg.default], s);
export const bgBrightYellow = (s: string) => wrap([brightBg.yellow, bg.default], s);
export const bgBrightBlue = (s: string) => wrap([brightBg.blue, bg.default], s);
export const bgBrightMagenta = (s: string) => wrap([brightBg.magenta, bg.default], s);
export const bgBrightCyan = (s: string) => wrap([brightBg.cyan, bg.default], s);
export const bgBrightWhite = (s: string) => wrap([brightBg.white, bg.default], s);

// not all terminals support this (256 ansi color table)
const ansiColor256 = (code: number) => `\u001B[38;5;${code}m`;
export const color256 = (code: number) => (s: string) => wrapAnsi(s, ansiColor256(code), ansi(color.default));

const ansiBg256 = (code: number) => `\u001B[48;5;${code}m`;
export const bg256 = (code: number) => (s: string) => wrapAnsi(s, ansiBg256(code), ansi(bg.default));

// not all terminals support this (truecolor)
const ansiRgb = (r: number, g: number, b: number) => `\u001B[38;2;${r};${g};${b}m`;
export const rgb = (r: number, g: number, b: number) => (s: string) => wrapAnsi(s, ansiRgb(r, g, b), ansi(color.default));

const ansiBgRgb = (r: number, g: number, b: number) => `\u001B[48;2;${r};${g};${b}m`;
export const bgRgb = (r: number, g: number, b: number) => (s: string) => wrapAnsi(s, ansiBgRgb(r, g, b), ansi(bg.default));

// TODO: do we need to do this?
// https://github.com/chalk/chalk/blob/main/source/utilities.js#L21
