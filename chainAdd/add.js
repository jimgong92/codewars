function add(n){
  //create array of observed numbers in the closure scope
  var sum = function(x){
    return add(sum + x);
  }
  sum.valueOf = function(){
    return n;
  }
  return sum;

  //function accepts an argument and pushes it into the closure scope sum array

}
