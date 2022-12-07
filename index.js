import mergeTwoLists from "./linkedLists/mergeTwoListsByOrder.js";
import ListNode from "./linkedLists/listNode.js";
import reverseList from "./linkedLists/reverseList.js";
import longestCommonPrefix from "./longestCommonPrefix.js";

const list1 = new ListNode(
  6,
  new ListNode(10, new ListNode(12, new ListNode(3)))
);

const list2 = new ListNode(
  4,
  new ListNode(2, new ListNode(8, new ListNode(5)))
);

const list3 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

// console.log(mergeTwoLists(list1, list2));

// console.log(reverseList(list3));
const strArr1 = ["dog", "racecar", "car"];
const strArr2 = ["flower", "flow", "flight"];
const strArr3 = ["flower", "flower", "flower"];
// const strArr2 = ["flower", "flow"];
console.log(longestCommonPrefix(strArr3));
