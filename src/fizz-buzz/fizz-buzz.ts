import {
  buzzRule,
  defaultRule,
  fizzBuzzRule,
  fizzRule,
  Rule,
  zeroRule,
} from './rules';

export class FizzBuzzTranslator {
  rules: Rule[] = [];

  constructor(rules?: Rule[]) {
    if (rules) {
      this.rules = rules;
    } else {
      this.rules.push(zeroRule);
      this.rules.push(fizzBuzzRule);
      this.rules.push(fizzRule);
      this.rules.push(buzzRule);
      this.rules.push(defaultRule);
    }
  }

  translate(input: number): string {
    let translation = '';

    this.rules.forEach((rule) => (translation += rule(translation, input)));

    return translation;
  }

  findContiguousFizzBuzzInRange(from: number, to: number): [number, number][] {
    const contiguousFizzBuzz: [number, number][] = [];

    [...Array(to - from).keys()]
      .map((x) => x + from)
      .forEach((input) => {
        const currentTranslation = this.translate(input);
        const nextTranslation = this.translate(input + 1);

        if (
          (currentTranslation === 'Fizz' || currentTranslation === 'Buzz') &&
          (nextTranslation === 'Fizz' || nextTranslation === 'Buzz')
        ) {
          contiguousFizzBuzz.push([input, input + 1]);
        }
      });

    return contiguousFizzBuzz;
  }
}
