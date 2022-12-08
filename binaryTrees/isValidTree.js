import TreeNode from "./binaryTree.js";

const isValidBST = function (root) {
  const helper = (node, min, max) => {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    return (
      helper(node.left, min, node.val) && helper(node.right, node.val, max)
    );
  };
  return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));

const root2 = new TreeNode(
  5,
  new TreeNode(1),
  new TreeNode(4, new TreeNode(3), new TreeNode(6))
);
const root3 = new TreeNode(
  5,
  new TreeNode(1, new TreeNode(0), new TreeNode(2)),
  new TreeNode(6, new TreeNode(3), new TreeNode(7))
);

const root4 = new TreeNode(0); // should return true

const root5 = new TreeNode(0, new TreeNode(-1)); // should return true

console.log(isValidBST(root2));
