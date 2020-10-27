// remove items from our list (.pop)
// change an item
function splitBits(len, index) {
  const numBits = Math.ceil(Math.log2(len));
  const topBit = index & (1 << (numBits - 1));
  const remainingBits = index % (1 << (numBits - 1));
  return [topBit ? 1 : 0, remainingBits];
}
function createNode(left, right, isLeaf, len) {
  return {
    left,
    right,
    isLeaf,
    len,
  };
}
function updateTrie(index, leaf, root) {
  if (root === null) {
    return leaf;
  }
  let depth = Math.log2(root.len);
  if (isInteger(depth)) {
    while (--depth) {
      leaf = createNode(leaf, null, false, leaf.len);
    }
    return createNode(root, leaf, false, leaf.len + root.len);
  } else if (root.isLeaf) {
    return leaf;
  }
  [topBit, remainingBits] = splitBits(root.len, index);
  const left = topBit ? root.left : updateTrie(remainingBits, leaf, root.left);
  const right = topBit
    ? updateTrie(remainingBits, leaf, root.right)
    : root.right;
  return createNode(left, right, false, left.len + right.len);
}
class ImmutableArray {
  // create a new trie
  constructor(root = null) {
    this._root = root;
  }
  // access an item (retrieve)
  getValue(index, root) {
    if (root === null) {
      return undefined;
    }
    [topBit, remainingBits] = splitBits(root.len, index);
    const value = topBit ? root.right : root.left;
    return root.isLeaf ? value : this.getValue(remainingBits, value);
  }
  // add items to our list (.push)
  push(value) {
    const newLeaf = this._length % 2 === 0;
    const leaf = createNode(
      newLeaf ? value : this.getValue(this._length - 1, this._root),
      newLeaf ? undefined : value,
      true,
      newLeaf ? 1 : 2
    );
    const root = updateTrie(this._length + 1, leaf, this._root);
    return new ImmutableArray(root, this._length + 1);
  }
  length() {
    return this._root ? 0 : this._length;
  }
}
const array = new ImmutableArray().push(5).push(10).push(100);
