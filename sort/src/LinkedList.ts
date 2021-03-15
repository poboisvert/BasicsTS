class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    // If Data
    if (!this.head) {
      this.head = node;
      return; // :void can not return eg: return 123
    }
    // INIT list
    let tail = this.head;
    while (tail.next) {
      // if no next the loop will end
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0; // Empty list
    }

    // INIT
    let length = 1;
    let node = this.head;

    // Loop Node
    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }
  //
  at(index: number): Node {
    if (!this.head) {
      throw new Error("Index out of bounds");
    }

    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error("Index out of bounds");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
