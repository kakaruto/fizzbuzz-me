import { FizzBuzzTranslator } from './fizz-buzz/fizz-buzz';

console.log('FizzBuzzTranslator Demo!\n');
console.log('Samples from 0 to 15:');
const fizzBuzzTranslator = new FizzBuzzTranslator();
[...Array(16).keys()].map((x) =>
  console.log(`${x} => ${fizzBuzzTranslator.translate(x)}`),
);
