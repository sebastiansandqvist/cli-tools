import { color } from '../src';

[color.bold, color.dim, color.italic, color.underline, color.blink, color.inverse, color.invisible, color.strike].forEach((fn) => {
  console.log(fn(fn.name));
});

[color.black, color.red, color.green, color.yellow, color.blue, color.magenta, color.cyan, color.white].forEach((fn) => {
  console.log(fn(fn.name));
});

[color.bgBlack, color.bgRed, color.bgGreen, color.bgYellow, color.bgBlue, color.bgMagenta, color.bgCyan, color.bgWhite].forEach((fn) => {
  console.log(fn(fn.name));
});

[color.brightBlack, color.brightRed, color.brightGreen, color.brightYellow, color.brightBlue, color.brightMagenta, color.brightCyan, color.brightWhite].forEach(
  (fn) => {
    console.log(fn(fn.name));
  },
);

[
  color.bgBrightBlack,
  color.bgBrightRed,
  color.bgBrightGreen,
  color.bgBrightYellow,
  color.bgBrightBlue,
  color.bgBrightMagenta,
  color.bgBrightCyan,
  color.bgBrightWhite,
].forEach((fn) => {
  console.log(fn(fn.name));
});
