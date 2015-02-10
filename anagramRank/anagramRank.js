function listPosition(word) {
  //Return the anagram list position of the word
  var count = 0;
  var found = false;
  var firstCount = 0;
  var sorted = word.split('').sort();
  function recurse(currSeq, options, firstCall){
    if (currSeq.length === word.length){
      //check for duplicate
      if (currSeq.join('') > word) {
        found = true;
        return;
      }
      if (currSeq[0] === sorted[0]) firstCount++;
      count++;
    }
    for (var i = 0; i < options.length; i++){
      if (found) break;
      if (i > 0) {
        if (options[i] === options[i - 1]) continue;
        if (options[i] !== word[0] && options.length === word.length){
          count += firstCount;
          continue;
        }
      }
      recurse(currSeq.concat([options[i]]), getDissectedArray(i, options));
    }

  }
  recurse([], sorted);
  return count;
}

function getDissectedArray(index, array){
  var res = [];
  for (var i = 0; i < array.length; i++){
    if (i !== index) res.push(array[i]);
  }
  return res;
}