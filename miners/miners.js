function solve(map, miner, exit) {
  //Quirk: Right is really down and up is really left
  var refBoard = [];
  for (var i = 0; i < map.length; i++){
    var row = [];
    for (var j = 0; j < map[0].length; j++){
      row.push(true);
    }
    refBoard.push(row);
  }
  var solution;
  function recurse(x, y, currSeq){
    //if miner at exit, return move sequence
    if (checkMatch(x, y, exit)) {
      solution = currSeq;
    }
    //move left
    if (isOpen(map, x - 1, y, refBoard)){
      recurse(x - 1, y, currSeq.concat(['left']));
      toggle(refBoard, x - 1, y);
    }
    //move up
    if (isOpen(map, x, y - 1, refBoard)){
      recurse(x, y - 1, currSeq.concat(['up']));
      toggle(refBoard, x, y - 1);

    }
    //move right
    if (isOpen(map, x + 1, y, refBoard)){
      recurse(x + 1, y, currSeq.concat(['right']));
      toggle(refBoard, x + 1, y);

    }
    //move down
    if (isOpen(map, x, y + 1, refBoard)){
      recurse(x, y + 1, currSeq.concat(['down']));
      toggle(refBoard, x, y + 1);

    }
  }
  recurse(miner.x, miner.y, []);
  return solution;
}

function checkMatch(x, y, exit){
  if (x === exit.x && y === exit.y) return true;
  return false;
}
function isOpen(map, x, y, refBoard){
  if (map[x] && map[x][y] && refBoard[x] && refBoard[x][y]){
    toggle(refBoard, x, y);
    return true;
  }
  return false;
}
function toggle(matrix, x, y){
  matrix[x][y] = !matrix[x][y];
}