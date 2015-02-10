function loop_size(node){
  var hare = node.next;
  var turtle = node;
  var count = 0;
  while(hare !== turtle){
    hare = hare.next.next;
    turtle = turtle.next;
  }
  turtle = turtle.next;
  count++;
  while (turtle !== hare){
    turtle = turtle.next;
    count++;
  }
  return count;
}

function Node(){
  this.next;
}