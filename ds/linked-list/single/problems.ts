import { ListNode } from ".";

function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) return true;
  let slow = head!;
  let fast = head!;
  while (fast.next && fast.next.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  let prev: ListNode | null = null,
    curr = slow.next;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  let left: ListNode | null = head,
    right: ListNode | null = prev;

  while (right) {
    if (left!.data !== right.data) return false;
    left = left!.next;
    right = right.next;
  }

  return true;
}
