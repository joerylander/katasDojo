const reverseList = (head) => {
  let prev = null;
  let curr = head;
  let next = head;
  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

export default reverseList;
