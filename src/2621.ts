/**
 * Problem: 2621. Sleep
 * @see {@link https://leetcode.com/problems/sleep/description/}
 */

// Solution

export async function sleep(millis: number): Promise<any> {
  let result = new Promise(function (resolve, reject) {
    setTimeout(function (value: any) {
      resolve(value);
    }, millis);
  });
  return result;
}

if (typeof window !== "undefined") {
  window.addEventListener("load", async () => {
    let t = Date.now();
    const millis = 100;
    const result_2621 = await sleep(millis).then(() => Date.now() - t); // 100
    // console.log("🚀 ~ result_2621:", result_2621);
  });
}
