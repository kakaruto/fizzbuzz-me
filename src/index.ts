import { FizzBuzzTranslator } from './fizz-buzz/fizz-buzz';
import { BuzzRule, DefaultRule, ZeroRule } from './fizz-buzz/rules';

console.log('FizzBuzzTranslator Demo!\n');
console.log('Samples from 0 to 15:');
const fizzBuzzTranslator = new FizzBuzzTranslator();
[...Array(16).keys()].map((x) =>
  console.log(`${x} => ${fizzBuzzTranslator.translate(x)}`)
);

console.log(
  '\nContiguous numbers that leads to the sequence Fizz then Buzz or Buzz then Fizz in an array 0 to 100 :'
);
fizzBuzzTranslator
  .findContiguousFizzBuzzInRange(0, 100)
  .forEach((result) => console.log(`${result[0]}/${result[1]}`));

const withoutFuzzTranslator = new FizzBuzzTranslator([
  new ZeroRule(),
  new BuzzRule(),
  new DefaultRule(),
]);
console.log('\nSamples from 0 to 15 with custom fuzzBuzzRules:');
[...Array(16).keys()].map((x) =>
  console.log(`${x} => ${withoutFuzzTranslator.translate(x)}`)
);
