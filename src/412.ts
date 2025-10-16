/**
 * Problem: 412. Fizz Buzz
 * @see {@link https://leetcode.com/problems/fizz-buzz/description/}
 */

// Solution

export function fizzBuzz(n: number): string[] {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer.push("FizzBuzz");
    } else if (i % 3 == 0) {
      answer.push("Fizz");
    } else if (i % 5 == 0) {
      answer.push("Buzz");
    } else {
      answer.push(i.toString());
    }
  }
  return answer;
}

const n = 5;
const result_412 = fizzBuzz(n);
// console.log("🚀 ~ result_412:", result_412);
