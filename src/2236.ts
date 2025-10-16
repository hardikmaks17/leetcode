/**
 * Problem: 2236. Root Equals Sum of Children
 * @see {@link https://leetcode.com/problems/root-equals-sum-of-children/description/}
 */

/**
 * Definition for a binary tree node.
 */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// Solution

type root = TreeNode | null;

function checkTree(root: root): boolean {
  return root && root.left && root.right
    ? root.val === root.left.val + root.right.val
    : false;
}

const root: root = new TreeNode(10, new TreeNode(4), new TreeNode(6));
const result_2236 = checkTree(root);
// console.log("🚀 ~ result_2236:", result_2236);
