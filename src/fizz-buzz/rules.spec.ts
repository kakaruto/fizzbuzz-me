import { expect } from 'chai';
import {
  buzzRule,
  defaultRule,
  fizzBuzzRule,
  fizzRule,
  zeroRule,
} from './rules';

describe('FizzBuzz rules', () => {
  describe('zeroRule', () => {
    it('should returns "0" if input is 0', () => {
      expect(zeroRule('', 0)).to.equal('0');
    });

    it('should returns empty string if input is 0 but value is not empty', () => {
      expect(zeroRule('2', 0)).to.equal('');
    });

    it('should returns empty string if input is not 0', () => {
      expect(zeroRule('', 42)).to.equal('');
    });
  });

  describe('fizzBuzzRule', () => {
    it('should returns "Fizzbuzz" if input is multiple of 3 and 5', () => {
      expect(fizzBuzzRule('', 15)).to.equal('Fizzbuzz');
    });

    it('should returns empty string if input is multiple of 3 and 5 but value is not empty', () => {
      expect(fizzBuzzRule('2', 15)).to.equal('');
    });

    it('should returns empty string if input is not multiple of 3 and 5', () => {
      expect(fizzBuzzRule('', 42)).to.equal('');
    });
  });

  describe('fizzRule', () => {
    it('should returns "Fizz" if input is multiple of 3', () => {
      expect(fizzRule('', 3)).to.equal('Fizz');
    });

    it('should returns empty string if input is multiple of 3 but value is not empty', () => {
      expect(fizzRule('2', 3)).to.equal('');
    });

    it('should returns empty string if input is not multiple of 3', () => {
      expect(fizzRule('', 2)).to.equal('');
    });
  });

  describe('buzzRule', () => {
    it('should returns "Fizzbuzz" if input is multiple of 5', () => {
      expect(buzzRule('', 5)).to.equal('Buzz');
    });

    it('should returns empty string if input is multiple of 5 but value is not empty', () => {
      expect(buzzRule('2', 5)).to.equal('');
    });

    it('should returns empty string if input is not multiple of  5', () => {
      expect(buzzRule('', 42)).to.equal('');
    });
  });

  describe('defaultRule', () => {
    it('should returns the input in string if the value is empty', () => {
      expect(defaultRule('', 15)).to.equal('15');
    });

    it('should returns empty string if value is not empty', () => {
      expect(defaultRule('42', 42)).to.equal('');
    });
  });
});
