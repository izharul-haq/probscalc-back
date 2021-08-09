import { HTTPError } from '@/models/Error';
import { Results } from '@/models/Result';
import { ProbService } from '@/services/ProbService';
import { Get, JsonController, QueryParam } from 'routing-controllers';
import {
  OperationInfo,
  Parameters,
  ResponseEntry,
} from 'routing-controllers-openapi-extended';
import Container from 'typedi';
import { ErrorResponse } from './responses/ErrorResponse';
import { ResultResponse } from './responses/ResultResponse';

@JsonController('/dist')
export class DistributionController {
  constructor(private probService: ProbService) {
    this.probService = Container.get(ProbService);
  }

  @Get('/binom')
  @OperationInfo({
    description: 'Get binomial distribution from given parameters',
    produces: ['application/json'],
  })
  @Parameters([
    {
      name: 'x',
      description: 'Number of success. 0 \u2264 x \u2264 n',
      in: 'query',
      required: true,
    },
    {
      name: 'n',
      description: 'Number of trials. n \u2265 x',
      in: 'query',
      required: true,
    },
    {
      name: 'p',
      description: 'Probability on each trial. 0 \u2264 p \u2264 1',
      in: 'query',
      required: true,
    },
  ])
  @ResponseEntry({
    statusCode: 200,
    schema: ResultResponse,
    description: 'OK',
    examples: {
      'application/json': {
        eq: 0,
        lt: 0,
        leq: 0,
        geq: 0,
        gt: 0,
      },
    },
  })
  @ResponseEntry({
    statusCode: 400,
    schema: ErrorResponse,
    description: 'Bad Request',
    examples: {
      'application/json': {
        httpCode: 400,
        message: 'message',
      },
    },
  })
  public async getBinomial(
    @QueryParam('x') x: number,
    @QueryParam('n') n: number,
    @QueryParam('p') p: number
  ): Promise<Results> {
    const errorCond01 = x < 0 || n < 0 || p < 0;
    const errorCond02 = x > n;
    const errorCond03 = p > 1;
    const errorCond04 = !(Number.isInteger(x) && Number.isInteger(n));

    if (errorCond01 || errorCond02 || errorCond03 || errorCond04) {
      throw new HTTPError(400, 'Invalid arguments');
    }

    return await this.probService.getProbability('binom', [x, n, p]);
  }

  @Get('/geo')
  @OperationInfo({
    description: 'Get geometric distribution from given parameters',
    produces: ['application/json'],
  })
  @Parameters([
    {
      name: 'x',
      description: 'Number of failures. x \u2265 0',
      in: 'query',
      required: true,
    },
    {
      name: 'p',
      description: 'Probability on each trial. 0 \u2264 p \u2264 1',
      in: 'query',
      required: true,
    },
  ])
  @ResponseEntry({
    statusCode: 200,
    schema: ResultResponse,
    description: 'OK',
    examples: {
      'application/json': {
        eq: 0,
        lt: 0,
        leq: 0,
        geq: 0,
        gt: 0,
      },
    },
  })
  @ResponseEntry({
    statusCode: 400,
    schema: ErrorResponse,
    description: 'Bad Request',
    examples: {
      'application/json': {
        httpCode: 400,
        message: 'message',
      },
    },
  })
  public async getGeometric(
    @QueryParam('x') x: number,
    @QueryParam('p') p: number
  ): Promise<Results> {
    const errorCond01 = x < 0 || p < 0;
    const errorCond02 = p > 1;
    const errorCond03 = !Number.isInteger(x);

    if (errorCond01 || errorCond02 || errorCond03) {
      throw new HTTPError(400, 'Invalid arguments');
    }

    return await this.probService.getProbability('geo', [x, p]);
  }

  @Get('/hyper')
  @OperationInfo({
    description: 'Get hypergeometric distribution from given parameters',
    produces: ['application/json'],
  })
  @Parameters([
    {
      name: 'x',
      description:
        'Number of observed success. 0 \u2264 x \u2264 n, 0 \u2264 x \u2264 k',
      in: 'query',
      required: true,
    },
    {
      name: 'n',
      description: 'Number of draws. x \u2264 n \u2264 N',
      in: 'query',
      required: true,
    },
    {
      name: 'N',
      description: 'Population size. N \u2265 n, N \u2265 k',
      in: 'query',
      required: true,
    },
    {
      name: 'k',
      description: 'Number of success in the population. x \u2264 k \u2264 N',
      in: 'query',
      required: true,
    },
  ])
  @ResponseEntry({
    statusCode: 200,
    schema: ResultResponse,
    description: 'OK',
    examples: {
      'application/json': {
        eq: 0,
        lt: 0,
        leq: 0,
        geq: 0,
        gt: 0,
      },
    },
  })
  @ResponseEntry({
    statusCode: 400,
    schema: ErrorResponse,
    description: 'Bad Request',
    examples: {
      'application/json': {
        httpCode: 400,
        message: 'message',
      },
    },
  })
  public async getHypergeometric(
    @QueryParam('x') x: number,
    @QueryParam('n') n: number,
    @QueryParam('N') N: number,
    @QueryParam('k') k: number
  ): Promise<Results> {
    const errorCond01 = x < 0 || n < 0 || N < 0 || k < 0;
    const errorCond02 = x > n || n > N || x > k || k > N;
    const errorCond03 = !(
      Number.isInteger(x) &&
      Number.isInteger(n) &&
      Number.isInteger(N) &&
      Number.isInteger(k)
    );

    if (errorCond01 || errorCond02 || errorCond03) {
      throw new HTTPError(400, 'Invalid arguments');
    }

    return await this.probService.getProbability('hyper', [x, n, N, k]);
  }

  @Get('/poisson')
  @OperationInfo({
    description: 'Get poisson distribution from given parameters',
    produces: ['application/json'],
  })
  @Parameters([
    {
      name: 'x',
      description: 'Number of success. x \u2265 0',
      in: 'query',
      required: true,
    },
    {
      name: 'p',
      description: 'Average rate of success. p \u2265 0',
      in: 'query',
      required: true,
    },
  ])
  @ResponseEntry({
    statusCode: 200,
    schema: ResultResponse,
    description: 'OK',
    examples: {
      'application/json': {
        eq: 0,
        lt: 0,
        leq: 0,
        geq: 0,
        gt: 0,
      },
    },
  })
  @ResponseEntry({
    statusCode: 400,
    schema: ErrorResponse,
    description: 'Bad Request',
    examples: {
      'application/json': {
        httpCode: 400,
        message: 'message',
      },
    },
  })
  public async getPoisson(
    @QueryParam('x') x: number,
    @QueryParam('p') p: number
  ): Promise<Results> {
    const errorCond01 = x < 0 || p < 0;
    const errorCond02 = !Number.isInteger(x);

    if (errorCond01 || errorCond02) {
      throw new HTTPError(400, 'Invalid arguments');
    }

    return await this.probService.getProbability('poisson', [x, p]);
  }
}
