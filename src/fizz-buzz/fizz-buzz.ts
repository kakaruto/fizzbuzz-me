import {
  BuzzRule,
  DefaultRule,
  FizzBuzzRule,
  FizzRule,
  Rule,
  ZeroRule,
} from './rules';

export class FizzBuzzTranslator {
  private rules: Rule[] = [];

  constructor(rules?: Rule[]) {
    if (rules) {
      this.rules = rules;
    } else {
      this.rules.push(new ZeroRule());
      this.rules.push(new FizzBuzzRule());
      this.rules.push(new FizzRule());
      this.rules.push(new BuzzRule());
      this.rules.push(new DefaultRule());
    }
  }

  translate(input: number): string {
    return this.rules.find((x) => x.canApply(input))?.apply(input) || '';
  }

  findContiguousFizzBuzzInRange(from: number, to: number): [number, number][] {
    if (from > to) throw new Error('IllegalArgument : from > to');
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
