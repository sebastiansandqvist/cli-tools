import * as color from './color';
import * as cmd from './commands';

export * as color from './color';
export * as cmd from './commands';

function write(s: string) {
  return new Promise((resolve) => {
    process.stdout.write(s, resolve);
  });
}

confirm('foo?');
process.stdin.write(cmd.bell());
console.log('beep');

/*

checkbox
plain input
radio
button
loading spinner
progress bar?

const response: 'a' | 'b' | 'c' = await select(['c', 'b', 'a']);
*/
