import { expect } from 'chai';
import { FizzBuzzTranslator } from './fizz-buzz';

describe('FizzBuzzTranslator', () => {
  let fizzBuzzTranslator: FizzBuzzTranslator;

  beforeEach(() => {
    fizzBuzzTranslator = new FizzBuzzTranslator();
  });
  it('should translate 0 to "0"', () => {
    expect(fizzBuzzTranslator.translate(0)).to.equal('0');
  });

  it('should translate 1 to "1"', () => {
    expect(fizzBuzzTranslator.translate(1)).to.equal('1');
  });

  it('should translate 3 to "Fizz"', () => {
    expect(fizzBuzzTranslator.translate(3)).to.equal('Fizz');
  });

  it('should translate 5 to "Buzz"', () => {
    expect(fizzBuzzTranslator.translate(5)).to.equal('Buzz');
  });

  it('should translate 10 to "10"', () => {
    expect(fizzBuzzTranslator.translate(10)).to.equal('Buzz');
  });

  it('should translate 15 to "Fizzbuzz"', () => {
    expect(fizzBuzzTranslator.translate(15)).to.equal('Fizzbuzz');
  });
});
