/**
 * Problem: 2629. Function Composition
 * @see {@link https://leetcode.com/problems/function-composition/description/}
 */

// Solution

type F = (x: number) => number;

export function compose(functions: F[]): F {
  return function (x) {
    return functions.reduceRight(function (prevResult, fn) {
      return fn(prevResult);
    }, x);
  };
}

const fn = compose([(x) => x + 1, (x) => 2 * x]);
const result_2629 = fn(4);
// console.log("🚀 ~ result_2629:", result_2629);
