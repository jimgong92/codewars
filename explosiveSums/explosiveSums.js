function solver(n){
  var memo = [1];
  for (var i = 1; i <= n; i++){
    memo[i] = 0;
  }
  for (var i = 1; i <= n; i++){
    for (var j = i; j <= n; j++){
      memo[j] += memo[j - i];
    }
  }
  return memo[n];
}