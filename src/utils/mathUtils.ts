/**
 * Get factorial of n
 * @param n integer >= 0
 * @returns factorial of n
 */
export const factorial = (n: number): number => {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res = res * i;
  }

  return res;
};

/**
 * Get combinatorial from k of n
 * @param n size of the whole set
 * @param k size of the target set
 * @returns combinatorial from k of n
 */
export const combinatorial = (n: number, k: number): number => {
  if (n < 0 || k < 0 || n < k) return 0;
  return factorial(n) / (factorial(k) * factorial(n - k));
};

/**
 * Get P(X = x) from binomial distribution
 * @param x number of success, 0 <= x <= n
 * @param n number of trials, n >= x
 * @param p probabilty of success on each trial, 0 <= p <= 1
 * @returns P(X = x)
 */
export const binomial = (x: number, n: number, p: number): number => {
  return combinatorial(n, x) * Math.pow(p, x) * Math.pow(1 - p, n - x);
};

/**
 * Get P(X = x) from geometric distribution
 * @param x number of failures, x >= 0
 * @param p probability of success on each trial, 0 <= p <= 1
 * @returns P(X = x)
 */
export const geometric = (x: number, p: number): number => {
  return p * Math.pow(1 - p, x);
};

/**
 * Get P(X = x) from hypergeometric distribution
 * @param x number of observed success, 0 <= x <= n, 0 <= x <= k
 * @param n number of draws, x <= n <= N
 * @param N population size, N >= n, N >= k
 * @param k number of success in the population, x <= k <= N
 * @returns P(X = x)
 */
export const hypergeometric = (
  x: number,
  n: number,
  N: number,
  k: number
): number => {
  return (
    (combinatorial(k, x) * combinatorial(N - k, n - x)) / combinatorial(N, n)
  );
};

/**
 * Get P(X = x) from poisson distribution
 * @param x number of success, x >= 0
 * @param p average rate of success, p >= 0
 * @returns P(X = x)
 */
export const poisson = (x: number, p: number): number => {
  return (Math.exp(-p) * Math.pow(p, x)) / factorial(x);
};
