type Rule = (value: string, n: number) => string;

const zeroRule: Rule = (value: string, input: number): string =>
  value.length === 0 && input === 0 ? '0' : '';

const fizzBuzzRule: Rule = (value: string, input: number): string =>
  value.length === 0 && input % 3 === 0 && input % 5 === 0 ? 'Fizzbuzz' : '';

const fizzRule: Rule = (value: string, input: number): string =>
  value.length === 0 && input % 3 === 0 ? 'Fizz' : '';

const buzzRule: Rule = (value: string, input: number): string =>
  value.length === 0 && input % 5 === 0 ? 'Buzz' : '';

const defaultRule: Rule = (value: string, input: number): string =>
  value.length === 0 ? input.toString() : '';

export { Rule, zeroRule, fizzBuzzRule, fizzRule, buzzRule, defaultRule };
