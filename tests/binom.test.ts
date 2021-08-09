import 'reflect-metadata';
import { ProbService } from '@/services/ProbService';
import Container from 'typedi';

test('Binomial distribution testing #01', async () => {
  const res = await Container.get(ProbService).getProbability(
    'binom',
    [5, 100, 0.05]
  );

  expect(res.lt).toBeCloseTo(0.436);
  expect(res.leq).toBeCloseTo(0.616);
  expect(res.eq).toBeCloseTo(0.18);
  expect(res.geq).toBeCloseTo(0.564);
  expect(res.gt).toBeCloseTo(0.384);
});

test('Binomial distribution testing #02', async () => {
  const res = await Container.get(ProbService).getProbability(
    'binom',
    [15, 50, 0.1]
  );

  expect(res.lt).toBeCloseTo(1);
  expect(res.leq).toBeCloseTo(1);
  expect(res.eq).toBeCloseTo(0);
  expect(res.geq).toBeCloseTo(0);
  expect(res.gt).toBeCloseTo(0);
});

test('Binomial distribution testing #03', async () => {
  const res = await Container.get(ProbService).getProbability(
    'binom',
    [2, 20, 0.04]
  );

  expect(res.lt).toBeCloseTo(0.81);
  expect(res.leq).toBeCloseTo(0.956);
  expect(res.eq).toBeCloseTo(0.146);
  expect(res.geq).toBeCloseTo(0.19);
  expect(res.gt).toBeCloseTo(0.044);
});
