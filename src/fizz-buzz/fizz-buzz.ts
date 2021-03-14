export class FizzBuzzTranslator {
  translate(input: number): string {
    if (input === 0) {
      return '0';
    }

    if (input % 3 === 0 && input % 5 === 0) {
      return 'Fizzbuzz';
    }
    if (input % 3 === 0) {
      return 'Fizz';
    }

    if (input % 5 === 0) {
      return 'Buzz';
    }

    return input.toString();
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
