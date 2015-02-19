/**
 * Plan of attack
 * Find the nested-most parenthetical statement and evaluate it
 * Determine if there is a negative attached to the numbers
 *
 * Can assume that the parentheses will not break the logic
 * Need to recursively operate on parenthetical statements
    -Evaluate the string between opening and closing parenths
 * Need to evaluate statements by order of operations
 */
function evalMath(str){
  str = str.split(' ').join('');
  var resArr = [];
  //Define each character in the string
  for (var i = 0; i < str.length; i++){
    console.log(resArr);
    console.log(typeof str[i]);
    if (str[i] === '('){
      var opens = 1,
          index = i + 1;
      while (opens > 0){
        if (str[index] === '(') opens++;
        if (str[index++] === ')') opens--;
      }
      //recursively pull out the parenthetical statement
      resArr.push(evalMath(str.substring(i, index)));
      //skip out of parentheses
      i += index - i - 1;
    }
    //Handle the minus sign
    else if (str[i] === '-') {
      var next = str[i + 1];
      if (typeof next === 'number' || next === '('){
        resArr.push(-1);
        resArr.push('*');
      }
      else resArr.push('-');
    }
    else if (!isNaN(Number(str[i]))) {
      console.log('here');
      var numStr = str[i];
      var tempIndex = i + 1;
      while (str[tempIndex] === '.' || !isNaN(Number(str[tempIndex]))){
        numStr += str[tempIndex++];
      }
      resArr.push(Number(numStr));
      i += tempIndex - i - 1;
    }
    else if (str[i] === '+' || str[i] === '*' || str[i] === '/') resArr.push(str[i]);
  }

  //evaluate multiplication and division
  for (var i = 0; i < resArr.length; i++){
    var c = resArr[i];
    if (c === '*' || c === '/'){
      if (c === '*'){
        var tuple = resArr.splice(i, 2);
        resArr[i - 1] = resArr[i - 1] * tuple[1];
      }
      if (c === '/'){
        var tuple = resArr.splice(i - 1, 2);
        resArr[i - 1] = resArr[i - 1] / tuple[1];
      }
      i--; 
    }

  }
  //evaluate addition and subtraction
  for (var i = 0; i < resArr.length; i++){
    var c = resArr[i];
    if (c === '+' || c === '-'){
      if (c === '+'){
        var tuple = resArr.splice(i, 2);
        resArr[i - 1] = resArr[i - 1] + tuple[1];
      }
      if (c === '-'){
        var tuple = resArr.splice(i - 1, 2);
        resArr[i - 1] = resArr[i - 1] - tuple[1];
      }
      i--; 
    }

  }
  return resArr[0];
}
