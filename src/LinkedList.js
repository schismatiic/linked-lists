import { Node } from "./Node.js";
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  append(value) {
    if (this.head === null) {
      return this.prepend(value);
    } else {
      let tmp = this.head;
      while (tmp.nextNode !== null) tmp = tmp.nextNode;
      tmp.nextNode = new Node(value, null);
      return tmp.nextNode;
    }
  }
  prepend(value) {
    this.head = new Node(value, this.head);
    return this.head;
  }
  size() {
    if (this.head === null) {
      return 0;
    } else {
      let count = 0;
      let tmp = this.head;
      count++;
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
        count++;
      }
      return count;
    }
  }
  returnHead() {
    return this.head !== null ? this.head.value : undefined;
  }
  toString() {
    let stringToPrint = "";
    let tmp = this.head;
    stringToPrint = stringToPrint + `( ${tmp.value} ) -> `;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
      stringToPrint = stringToPrint + `( ${tmp.value} ) -> `;
      if (tmp.nextNode === null) {
        stringToPrint = stringToPrint + `null`;
      }
    }
    console.log(stringToPrint);
  }
}
export { LinkedList };
