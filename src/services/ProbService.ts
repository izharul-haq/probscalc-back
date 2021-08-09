import { Results } from '@/models/Result';
import {
  binomial,
  geometric,
  hypergeometric,
  poisson,
} from '@/utils/mathUtils';
import { Service } from 'typedi';

@Service()
export class ProbService {
  public async getProbability(
    type: 'binom' | 'geo' | 'hyper' | 'poisson',
    params: number[]
  ): Promise<Results> {
    let equals = 0;
    let lessThan = 0;

    switch (type) {
      case 'binom':
        equals = binomial(params[0], params[1], params[2]);

        for (let i = 0; i < params[0]; i++) {
          lessThan += binomial(i, params[1], params[2]);
        }
        break;
      case 'geo':
        equals = geometric(params[0], params[1]);

        for (let i = 0; i < params[0]; i++) {
          lessThan += geometric(i, params[1]);
        }
        break;
      case 'hyper':
        equals = hypergeometric(params[0], params[1], params[2], params[3]);

        for (let i = 0; i < params[0]; i++) {
          lessThan += hypergeometric(i, params[1], params[2], params[3]);
        }
        break;
      case 'poisson':
        equals = poisson(params[0], params[1]);

        for (let i = 0; i < params[0]; i++) {
          lessThan += poisson(i, params[1]);
        }
        break;
    }

    const lessThanEquals = lessThan + equals;
    const greaterThanEquals = 1 - lessThan;
    const greaterThan = 1 - lessThanEquals;

    return {
      eq: equals,
      lt: lessThan,
      leq: lessThanEquals,
      geq: greaterThanEquals,
      gt: greaterThan,
    };
  }
}
