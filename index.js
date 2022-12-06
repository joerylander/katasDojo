import mergeTwoLists from "./linkedLists/mergeTwoListsByOrder.js";
import ListNode from "./linkedLists/listNode.js";
import reverseList from "./linkedLists/reverseList.js";

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
