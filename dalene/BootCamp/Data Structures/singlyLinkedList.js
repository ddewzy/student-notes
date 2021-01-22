function Node(value) {
  this.value = value;
  this.next = null;
}

class SinglyLinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor() {}

  push(value) {
    const node = new Node(value);

    if (!this.tail) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  pop() {
    let current;
    for (
      current = this.head;
      current && current.next && current.next.next;
      current = current.next
    ) {}

    if (!current) {
      return undefined;
    }

    if (!current.next) {
      this.head = this.tail = null;
      this.length--;
      return current.value;
    }

    const result = current.next.value;
    this.tail = current;
    this.tail.next = null;
    this.length--;
    return result;
  }

  shift() {
    const result = this.head;

    if (this.head) {
      this.head = this.head.next;
      this.length--;
    }

    if (!this.head) {
      this.tail = null;
    }

    return result ? result.value : undefined;
  }

  unshift(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;

    if (!this.head.next) {
      this.tail = node;
    }

    return this;
  }

  #getNode(index) {
    let current = this.head,
      i = 0;
    while (i != index && current) {
      i++;
      current = current.next;
    }

    return current;
  }

  get(index) {
    const node = this.#getNode(index);

    return node && node.value;
  }

  set(index, value) {
    const node = this.#getNode(index);

    if (node) {
      node.value = value;
    }
  }
}

export default SinglyLinkedList;
