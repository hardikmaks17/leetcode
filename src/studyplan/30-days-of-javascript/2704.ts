/**
 * Problem: 2704. To Be Or Not To Be
 * @see {@link https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript}
 */

// Solution
type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

export function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: (anotherVal) => {
      if (val === anotherVal) return true;
      throw new Error("Not Equal");
    },
    notToBe: (anotherVal) => {
      if (val !== anotherVal) return true;
      throw new Error("Equal");
    },
  };
}

const result_2704 = expect(5).toBe(5);
// console.log("🚀 ~ result_2704:", result_2704);
