import 'reflect-metadata';
import { ProbService } from '@/services/ProbService';
import Container from 'typedi';

test('Poisson distribution testing #01', async () => {
  const res = await Container.get(ProbService).getProbability(
    'poisson',
    [3, 10]
  );

  expect(res.lt).toBeCloseTo(0.003);
  expect(res.leq).toBeCloseTo(0.01);
  expect(res.eq).toBeCloseTo(0.008);
  expect(res.geq).toBeCloseTo(0.997);
  expect(res.gt).toBeCloseTo(0.99);
});

test('Poisson distribution testing #02', async () => {
  const res = await Container.get(ProbService).getProbability(
    'poisson',
    [120, 100]
  );

  expect(res.lt).toBeCloseTo(0.971);
  expect(res.leq).toBeCloseTo(0.977);
  expect(res.eq).toBeCloseTo(0.006);
  expect(res.geq).toBeCloseTo(0.028);
  expect(res.gt).toBeCloseTo(0.023);
});

test('Poisson distribution testing #03', async () => {
  const res = await Container.get(ProbService).getProbability(
    'poisson',
    [25, 20]
  );

  expect(res.lt).toBeCloseTo(0.843);
  expect(res.leq).toBeCloseTo(0.888);
  expect(res.eq).toBeCloseTo(0.044);
  expect(res.geq).toBeCloseTo(0.157);
  expect(res.gt).toBeCloseTo(0.112);
});
