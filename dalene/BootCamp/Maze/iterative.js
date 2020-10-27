const maze = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
function traverse(row, col, maze) {
while (maze[row][col] !== 2) {
maze[row][col] = -1;
if (maze[row].length > col + 1 && maze[row][col + 1] > 0) {
    console.log('Traveling right');
    col++;
    continue;
}
if (maze.length > row + 1 && maze[row + 1][col] > 0) {
    console.log('Traveling down');
    row++;
    continue;
}
if (row !== 0 && maze[row - 1][col] > 0) {
    console.log('Traveling up');
    row--;
    continue;
}
if (col !== 0 && maze[row][col - 1] > 0) {
    console.log('Traveling left');
    col--;
    continue;
}
maze[row][col] = -2;
if (maze[row].length > col + 1 && maze[row][col + 1] === -1) {
    console.log('stuck: backtrack');
    col++;
    continue;
}
if (maze.length > row + 1 && maze[row + 1][col] === -1) {
    console.log('stuck: backtrack');
    row++;
    continue;
}
if (row !== 0 && maze[row - 1][col] === -1) {
    console.log('stuck: backtrack');
    row--;
    continue;
}
if (col !== 0 && maze[row][col - 1] === -1) {
    console.log('stuck: backtrack');
    col--;
    continue;
}
}
console.log('done');
}
traverse(3, 0, maze);