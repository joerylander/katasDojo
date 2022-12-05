// Singly Linked List

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const list1 = new ListNode(
  6,
  new ListNode(10, new ListNode(12, new ListNode(3)))
);

const list2 = new ListNode(
  4,
  new ListNode(2, new ListNode(8, new ListNode(5)))
);

const mergeTwoLists = function (list1, list2) {
  const head = new ListNode();
  let curr = head;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;

      list2 = list2.next;
    }
    curr = curr.next;
  }
  curr.next = list1 || list2;
  return head.next;
};
// console.log(mergeTwoLists(list1, list2));
