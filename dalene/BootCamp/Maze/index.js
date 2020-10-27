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
  // row = 0 col = 0
    if (maze[row][col] === 2) {
        console.log("done");
        return true;
    }

    maze[row][col] = -1;

    if (maze[row].length > col + 1 && maze[row][col + 1] > 0) {
        console.log('Traveling right');
        if (traverse(row, col + 1, maze)){
            return true;
        }
    }

    if (maze.length > row + 1 && maze[row + 1][col] > 0) {
        console.log('Traveling down');
        if (traverse(row + 1, col, maze)) {
            return true;
        }
    }

    if (row !== 0 && maze[row - 1][col] > 0) {
        console.log('Traveling up');
        if (traverse(row - 1, col, maze)) {
            return true;
        }
    }    
    
    if (col !== 0 && maze[row][col - 1] > 0) {
        console.log('Traveling left');
        if (traverse(row, col - 1, maze)) {
            return true;
        }
    }

    console.log('stuck: backtrack');
    return false;
}

traverse(3, 0, maze);
