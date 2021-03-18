interface Rule {
  canApply(n: number): boolean;
  apply(n: number): string;
}

class ZeroRule implements Rule {
  canApply(n: number): boolean {
    return n === 0;
  }
  apply(n: number): string {
    if (!this.canApply(n)) {
      throw new Error('Illegal argument');
    }
    return '0';
  }
}

class FizzBuzzRule implements Rule {
  canApply(n: number): boolean {
    return n % 3 === 0 && n % 5 === 0;
  }

  apply(n: number): string {
    if (!this.canApply(n)) {
      throw new Error('Illegal argument');
    }
    return 'Fizzbuzz';
  }
}

class FizzRule implements Rule {
  canApply(n: number): boolean {
    return n % 3 === 0;
  }

  apply(n: number): string {
    if (!this.canApply(n)) {
      throw new Error('Illegal argument');
    }
    return 'Fizz';
  }
}
class BuzzRule implements Rule {
  canApply(n: number): boolean {
    return n % 5 === 0;
  }

  apply(n: number): string {
    if (!this.canApply(n)) {
      throw new Error('Illegal argument');
    }
    return 'Buzz';
  }
}

class DefaultRule implements Rule {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  canApply(n: number): boolean {
    return true;
  }

  apply(n: number): string {
    return n.toString();
  }
}

export { Rule, ZeroRule, FizzBuzzRule, FizzRule, BuzzRule, DefaultRule };
