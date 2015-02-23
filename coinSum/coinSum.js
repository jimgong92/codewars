var countChange = function(money, coins){
  coins = coins || [1,2,5,10,20,50,100,200];
  var values = [1];
  for(var i = 1; i <= money; i++){
    values[i] = 0;
  }
  for(var i = 0; i < coins.length; i++){
    var coin = coins[i];
    for(var currVal = coin; currVal <= money; currVal++){
          values[currVal] += values[currVal - coin];
    }
  }
  return values[money];
};