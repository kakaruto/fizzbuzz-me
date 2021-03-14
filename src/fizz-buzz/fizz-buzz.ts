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
}
