import * as color from './color';
import * as cmd from './commands';

export * as color from './color';
export * as cmd from './commands';

function write(s: string) {
  return new Promise((resolve) => {
    process.stdout.write(s, resolve);
  });
}

// confirm('foo?');
// Bun.stdin.stream();
console.log('\u0007');
await write('\u0007');
await write('boop ^  does not work?');
await write(`\x1B[G`);
await write('bee');
await write('\x1B[3C!');
console.log('\ndone');

/*

checkbox
plain input
radio
button
loading spinner
progress bar?

const response: 'a' | 'b' | 'c' = await select(['c', 'b', 'a']);
*/
