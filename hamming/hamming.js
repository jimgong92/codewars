function hammingFinder(index){
  if (index === 1) return 1;
  var queues = {
    2: [[], 0],
    3: [[], 0],
    5: [[], 0]
  },
      ham = 1,
      count = 1,
      base;
  while (count < index){
    for (base in queues){
      queues[base][0].push(base * ham);
    }
    for (base in queues){
      while (queues[base][0][queues[base][1]] <= ham){
        queues[base][1]++;
      }
    }
    //Identify the lowest value in the queue
    var min = 2;
    if (queues[3][0][queues[3][1]] < queues[min][0][queues[min][1]]) {
      min = 3;
    }
    if (queues[5][0][queues[5][1]] < queues[min][0][queues[min][1]]){
      min = 5;
    }
    ham = queues[min][0][queues[min][1]];
    count++;
  }
  return ham;

}