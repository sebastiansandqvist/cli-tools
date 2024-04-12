// https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797
// https://user-images.githubusercontent.com/12821885/251197668-6d232fa0-f8ad-4cab-8a7a-24b3bb08b481.png
// https://github.com/chalk/chalk/blob/main/source/vendor/ansi-styles/index.js

// MAJOR TODO:
// inputs need to be escaped so that they don't interfere with the ansi stuff

function write(s: string) {
  return new Promise((resolve) => {
    process.stdout.write(s, resolve);
  });
}

const RESET = 0;

const mode = {
  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  blink: [5, 25],
  inverse: [7, 27],
  invisible: [8, 28],
  strike: [9, 29],
} as const;

const ansi = (code: number) => `\u001B[${code}m`;

// TODO: look for simplifications between this and wrapAnsi
function wrap([open, close]: readonly [number, number], s: string) {
  const closeRegex = new RegExp(`\\u001B\\[${close}m`, 'g');
  const ansiOpen = ansi(open);
  const ansiClose = ansi(close);
  const escapedText = s.includes(ansiClose) ? s.replace(closeRegex, `${ansiClose}${ansiOpen}`) : s;
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

console.log(`Hello, ${bold('world')} ${italic('this')} ${underline('is')} ${blink('a')} ${dim('test')}.`);
console.log(`Hello, ${inverse('world')} ${invisible('this')} ${strike('is')} ${bold(italic(underline('a test')))}.`);

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

export const black = (s: string) => wrap([color.black, RESET], s);
export const red = (s: string) => wrap([color.red, RESET], s);
export const green = (s: string) => wrap([color.green, RESET], s);
export const yellow = (s: string) => wrap([color.yellow, RESET], s);
export const blue = (s: string) => wrap([color.blue, RESET], s);
export const magenta = (s: string) => wrap([color.magenta, RESET], s);
export const cyan = (s: string) => wrap([color.cyan, RESET], s);
export const white = (s: string) => wrap([color.white, RESET], s);
export const defaultColor = (s: string) => wrap([color.default, RESET], s);

console.log(`Hello, ${black('world')} ${red('this')} ${green('is')} ${yellow('a')} ${blue('test')}.`);
console.log(`Hello, ${magenta('world')} ${cyan('this')} ${white('is')} ${defaultColor('a')} ${italic(blue('test'))}.`);
console.log();

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

export const bgBlack = (s: string) => wrap([bg.black, RESET], s);
export const bgRed = (s: string) => wrap([bg.red, RESET], s);
export const bgGreen = (s: string) => wrap([bg.green, RESET], s);
export const bgYellow = (s: string) => wrap([bg.yellow, RESET], s);
export const bgBlue = (s: string) => wrap([bg.blue, RESET], s);
export const bgMagenta = (s: string) => wrap([bg.magenta, RESET], s);
export const bgCyan = (s: string) => wrap([bg.cyan, RESET], s);
export const bgWhite = (s: string) => wrap([bg.white, RESET], s);
export const bgDefaultColor = (s: string) => wrap([bg.default, RESET], s);

console.log(`Hello, ${bgBlack('world')} ${bgRed('this')} ${bgGreen('is')} ${bgYellow('a')} ${bgBlue('test')}.`);
console.log(`Hello, ${bgMagenta('world')} ${bgCyan('this')} ${bgWhite('is')} ${bgDefaultColor('a')} ${italic(bgBlue('test'))}.`);
console.log(`Hello, ${bgCyan(red('world'))} ${bgRed(blue('this'))} ${bgGreen(magenta('is'))} ${bgYellow(black('a'))} ${bgBlue(yellow(italic('test')))}.`);
console.log();

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

export const brightBlack = (s: string) => wrap([brightColor.black, RESET], s);
export const brightRed = (s: string) => wrap([brightColor.red, RESET], s);
export const brightGreen = (s: string) => wrap([brightColor.green, RESET], s);
export const brightYellow = (s: string) => wrap([brightColor.yellow, RESET], s);
export const brightBlue = (s: string) => wrap([brightColor.blue, RESET], s);
export const brightMagenta = (s: string) => wrap([brightColor.magenta, RESET], s);
export const brightCyan = (s: string) => wrap([brightColor.cyan, RESET], s);
export const brightWhite = (s: string) => wrap([brightColor.white, RESET], s);

console.log(`Hello, ${brightBlack('world')} ${brightRed('this')} ${brightGreen('is')} ${brightYellow('a')} ${brightBlue('test')}.`);
console.log(`Hello, ${brightMagenta('world')} ${brightCyan('this')} ${brightWhite('is')} a test.`);
console.log();

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

export const bgBrightBlack = (s: string) => wrap([brightBg.black, RESET], s);
export const bgBrightRed = (s: string) => wrap([brightBg.red, RESET], s);
export const bgBrightGreen = (s: string) => wrap([brightBg.green, RESET], s);
export const bgBrightYellow = (s: string) => wrap([brightBg.yellow, RESET], s);
export const bgBrightBlue = (s: string) => wrap([brightBg.blue, RESET], s);
export const bgBrightMagenta = (s: string) => wrap([brightBg.magenta, RESET], s);
export const bgBrightCyan = (s: string) => wrap([brightBg.cyan, RESET], s);
export const bgBrightWhite = (s: string) => wrap([brightBg.white, RESET], s);

console.log(`Hello, ${bgBrightBlack('world')} ${bgBrightRed('this')} ${bgBrightGreen('is')} ${bgBrightYellow('a')} ${bgBrightBlue('test')}.`);
console.log(`Hello, ${bgBrightMagenta('world')} ${bgBrightCyan('this')} ${bgBrightWhite('is')} a test.`);

function wrapAnsi(s: string, ansiOpen: string) {
  const ansiClose = ansi(RESET);
  const closeRegex = new RegExp(`\\u001B\\[${RESET}m`, 'g');
  const escapedText = s.includes(ansiClose) ? s.replace(closeRegex, `${ansiClose}${ansiOpen}`) : s;
  return `${ansiOpen}${escapedText}${ansiClose}`;
}

const ansiColor256 = (code: number) => `\u001B[38;5;${code}m`;
export const color256 = (code: number) => (s: string) => wrapAnsi(s, ansiColor256(code));
// export const color256 = (code: number) => (s: string) => `${ansiColor256(code)}${s}${ansi(RESET)}`;

(() => {
  for (let i = 0; i < 256; i++) {
    process.stdout.write(`${color256(i)('▮')}`);
    if ((i + 1) % 32 === 0) console.log();
  }
  console.log();
})();

const ansiBg256 = (code: number) => `\u001B[48;5;${code}m`;
export const bg256 = (code: number) => (s: string) => wrapAnsi(s, ansiBg256(code)); // `${ansiBg256(code)}${s}${ansi(RESET)}`;
// export const bg256 = (code: number) => (s: string) => `${ansiBg256(code)}${s}${ansi(RESET)}`;

const input = '12345678'.repeat(32);
for (let i = 0; i < input.length; i++) {
  await write(`${bg256(i)(input[i])}`);
  if ((i + 1) % 32 === 0) console.log();
}
console.log();

const ansiRgb = (r: number, g: number, b: number) => `\u001B[38;2;${r};${g};${b}m`;
export const rgb = (r: number, g: number, b: number) => (s: string) => wrapAnsi(s, ansiRgb(r, g, b));
// export const rgb = (r: number, g: number, b: number) => (s: string) => `${ansiRgb(r, g, b)}${s}${ansi(RESET)}`;

const ansiBgRgb = (r: number, g: number, b: number) => `\u001B[48;2;${r};${g};${b}m`;
export const bgRgb = (r: number, g: number, b: number) => (s: string) => wrapAnsi(s, ansiBgRgb(r, g, b));
// export const bgRgb = (r: number, g: number, b: number) => (s: string) => `${ansiBgRgb(r, g, b)}${s}${ansi(RESET)}`;

for (let i = 0; i < 256; i++) {
  await write(`${bgRgb(256 - i, 256 - i, 256 - i)(rgb(i, i, i)('+'))}`);
  if ((i + 1) % 32 === 0) console.log();
}
console.log();
console.log();

for (let i = 0; i < 256; i++) {
  await write(`${rgb(50, 50, i)('▮')}`);
  if ((i + 1) % 32 === 0) console.log();
}
console.log();
console.log();
for (let i = 0; i < 256; i++) {
  await write(`${rgb(i, 50, 50)('▮')}`);
  if ((i + 1) % 32 === 0) console.log();
}
console.log();
console.log();
for (let i = 0; i < 256; i++) {
  await write(`${rgb(50, i, 50)('▮')}`);
  if ((i + 1) % 32 === 0) console.log();
}
console.log();
console.log();

async () => {
  let i = 0;
  for (let r = 0; r < 255; r += 8) {
    for (let g = 0; g < 255; g += 8) {
      for (let b = 0; b < 255; b += 8) {
        await write(`${bgRgb(255 - r, 255 - g, 255 - b)(rgb(r, g, b)('▮'))}`);
        if (++i % 64 === 0) console.log();
      }
    }
  }
  console.log();
};
