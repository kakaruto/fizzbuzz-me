import { expect } from 'chai';
import {
  BuzzRule,
  DefaultRule,
  FizzBuzzRule,
  FizzRule,
  ZeroRule,
} from './rules';

describe('FizzBuzz rules', () => {
  describe('ZeroRule', () => {
    it('should returns "0" if input is 0', () => {
      expect(new ZeroRule().apply(0)).to.equal('0');
    });

    it('should canApply if input is 0', () => {
      expect(new ZeroRule().canApply(0)).to.be.true;
    });

    it('should throw error if input is not 0', () => {
      expect(() => new ZeroRule().apply(42)).to.throw('Illegal argument');
    });
  });

  describe('FizzBuzzRule', () => {
    it('should returns "Fizzbuzz" if input is multiple of 3 and 5', () => {
      expect(new FizzBuzzRule().apply(15)).to.equal('Fizzbuzz');
    });

    it('should canApply if input is is multiple of 3 and 5', () => {
      expect(new FizzBuzzRule().canApply(15)).to.be.true;
    });

    it('should throw error if input is not multiple of 3 and 5', () => {
      expect(() => new FizzBuzzRule().apply(42)).to.throw('Illegal argument');
    });
  });

  describe('FizzRule', () => {
    it('should returns "Fizz" if input is multiple of 3', () => {
      expect(new FizzRule().apply(3)).to.equal('Fizz');
    });

    it('should canApply if input is is multiple of 3', () => {
      expect(new FizzRule().canApply(3)).to.be.true;
    });

    it('should throw error if input is not multiple of 3', () => {
      expect(() => new FizzRule().apply(1)).to.throw('Illegal argument');
    });
  });

  describe('BuzzRule', () => {
    it('should returns "Buzz" if input is multiple of 5', () => {
      expect(new BuzzRule().apply(5)).to.equal('Buzz');
    });

    it('should canApply if input is is multiple of 5', () => {
      expect(new BuzzRule().canApply(5)).to.be.true;
    });

    it('should throw error if input is not multiple of 5', () => {
      expect(() => new BuzzRule().apply(1)).to.throw('Illegal argument');
    });
  });

  describe('DefaultRule', () => {
    it('should returns the input in string', () => {
      expect(new DefaultRule().apply(15)).to.equal('15');
    });

    it('should always canApply', () => {
      expect(new DefaultRule().canApply(12)).to.be.true;
    });
  });
});
