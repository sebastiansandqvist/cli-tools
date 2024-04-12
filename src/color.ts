// https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797
// https://user-images.githubusercontent.com/12821885/251197668-6d232fa0-f8ad-4cab-8a7a-24b3bb08b481.png

const mode = {
  clear: `ESC[0m`,
  bold: [`ESC[1m	`, `ESC[22m`],
  dim: [`ESC[2m	`, `ESC[22m`],
  italic: [`ESC[3m	`, `ESC[23m`],
  underline: [`ESC[4m	`, `ESC[24m`],
  blink: [`ESC[5m	`, `ESC[25m`],
  inverse: [`ESC[7m	`, `ESC[27m`],
  invisible: [`ESC[8m	`, `ESC[28m`],
  strike: [`ESC[9m	`, `ESC[29m`],
};

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
  reset: 0,
};

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
  reset: 0,
};

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

export function color256(id: number) {
  return `ESC[38;5;${id}m`;
}

export function bg256(id: number) {
  return `ESC[48;5;${id}m`;
}

export function colorRgb(r: number, g: number, b: number) {
  return `ESC[38;2;${r};${g};${b}m`;
}

export function bgRgb(r: number, g: number, b: number) {
  return `ESC[48;2;${r};${g};${b}m`;
}
