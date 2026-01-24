/**
 * Problem: 2648. Generate Fibonacci Sequence
 * @see {@link https://leetcode.com/problems/generate-fibonacci-sequence/description/}
 */

// Solution

export function* fibGenerator(): Generator<number> {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const callCount = 10;
const gen = fibGenerator();
const result_2648 = [];

for (let i = 0; i < callCount; i++) {
  result_2648.push(gen.next().value);
}

// console.log("🚀 ~ result_2648:", result_2648);
