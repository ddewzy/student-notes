const {test, expect} = require('@jest/globals');
const {default: SinglyLinkedList} = require('./SinglyLinkedList');

test('can construct list', () => {
  const list = new SinglyLinkedList();
  expect(list).toBeDefined();
});

test('pop() when empty returns undefined', () => {
  // Arrange
  const list = new SinglyLinkedList();

  // Act
  const result = list.pop();

  // Assert
  expect(result).toBeUndefined();
});

test('push an item into list', () => {
  // Arrange
  const list = new SinglyLinkedList();
  const value = 42;

  // Act
  list.push(value);

  // Assert
  expect(list.length).toBe(1);
});

test('pop will return the last item pushed', () => {
  // Arrange
  const list = new SinglyLinkedList();
  const value = 42;
  list.push(value);

  // Act
  const result = list.pop();

  // Assert
  expect(list.length).toBe(0);
  expect(result).toBe(value);
});

test('unshift an item into list', () => {
  // Arrange
  const list = new SinglyLinkedList();
  const value = 42;

  // Act
  list.push(value);

  // Assert
  expect(list.length).toBe(1);
});

test('shift will return the last item unshifted', () => {
  // Arrange
  const list = new SinglyLinkedList();
  const value = 42;
  list.unshift(value);

  // Act
  const result = list.shift();

  // Assert
  expect(list.length).toBe(0);
  expect(result).toBe(value);
});

test('pop returns last item pushed, when multiple items', () => {
  const first = 5;
  const second = 70;
  const list = new SinglyLinkedList();
  list.push(first);
  list.push(second);

  const result = list.pop();

  // Assert
  expect(list.length).toBe(1);
  expect(result).toBe(second);
});

test('shift returns last item unshifted, when multiple items', () => {
  const first = 5;
  const second = 70;
  const list = new SinglyLinkedList();
  list.unshift(first);
  list.unshift(second);

  const result = list.shift();

  // Assert
  expect(list.length).toBe(1);
  expect(result).toBe(second);
});

test('shift returns first item pushed', () => {
  const first = 5;
  const second = 70;
  const list = new SinglyLinkedList();
  list.push(first);
  list.push(second);

  const result = list.shift();

  // Assert
  expect(list.length).toBe(1);
  expect(result).toBe(first);
});

test('popping last item will reset list state to initial state', () => {
  const list = new SinglyLinkedList();
  const first = 42;
  const second = 43;
  list.push(first);

  list.pop();

  list.push(second);
  const result = list.pop();
  expect(list.length).toBe(0);
  expect(result).toBe(second);
});

test('shifting last item will reset list state to initial state', () => {
  const list = new SinglyLinkedList();
  const first = 42;
  const second = 43;
  list.push(first);

  list.shift();

  list.push(second);
  const result = list.pop();
  expect(list.length).toBe(0);
  expect(result).toBe(second);
});
