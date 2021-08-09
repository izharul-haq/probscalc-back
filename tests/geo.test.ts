import 'reflect-metadata';
import { ProbService } from '@/services/ProbService';
import Container from 'typedi';

test('Geometric distribution testing #01', async () => {
  const res = await Container.get(ProbService).getProbability('geo', [2, 0.4]);

  expect(res.lt).toBeCloseTo(0.64);
  expect(res.leq).toBeCloseTo(0.784);
  expect(res.eq).toBeCloseTo(0.144);
  expect(res.geq).toBeCloseTo(0.36);
  expect(res.gt).toBeCloseTo(0.216);
});

test('Geometric distribution testing #02', async () => {
  const res = await Container.get(ProbService).getProbability('geo', [3, 0.5]);

  expect(res.lt).toBeCloseTo(0.875);
  expect(res.leq).toBeCloseTo(0.938);
  expect(res.eq).toBeCloseTo(0.062);
  expect(res.geq).toBeCloseTo(0.125);
  expect(res.gt).toBeCloseTo(0.062);
});

test('Geometric distribution testing #03', async () => {
  const res = await Container.get(ProbService).getProbability('geo', [2, 0.2]);

  expect(res.lt).toBeCloseTo(0.36);
  expect(res.leq).toBeCloseTo(0.488);
  expect(res.eq).toBeCloseTo(0.128);
  expect(res.geq).toBeCloseTo(0.64);
  expect(res.gt).toBeCloseTo(0.512);
});
