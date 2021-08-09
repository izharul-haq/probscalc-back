import 'reflect-metadata';
import { ProbService } from '@/services/ProbService';
import Container from 'typedi';

test('Hypergeometric distribution testing #01', async () => {
  const res = await Container.get(ProbService).getProbability(
    'hyper',
    [2, 4, 52, 4]
  );

  expect(res.lt).toBeCloseTo(0.974);
  expect(res.leq).toBeCloseTo(1);
  expect(res.eq).toBeCloseTo(0.025);
  expect(res.geq).toBeCloseTo(0.026);
  expect(res.gt).toBeCloseTo(0.001);
});

test('Hypergeometric distribution testing #02', async () => {
  const res = await Container.get(ProbService).getProbability(
    'hyper',
    [2, 4, 8, 3]
  );

  expect(res.lt).toBeCloseTo(0.5);
  expect(res.leq).toBeCloseTo(0.928);
  expect(res.eq).toBeCloseTo(0.428);
  expect(res.geq).toBeCloseTo(0.5);
  expect(res.gt).toBeCloseTo(0.071);
});

test('Hypergeometric distribution testing #03', async () => {
  const res = await Container.get(ProbService).getProbability(
    'hyper',
    [1, 4, 15, 2]
  );

  expect(res.lt).toBeCloseTo(0.524);
  expect(res.leq).toBeCloseTo(0.943);
  expect(res.eq).toBeCloseTo(0.419);
  expect(res.geq).toBeCloseTo(0.476);
  expect(res.gt).toBeCloseTo(0.057);
});
