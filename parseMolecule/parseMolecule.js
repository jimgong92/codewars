function parseMolecule(molecule){
  var atoms = {};
  var current = '';
  //Handle multipliers by looking for them immediately
  var multiplier = [1,1,1,1];
  var inRound = false;
  var inSquare = false;
  var inCurly = false;

  for (var i = 0; i < molecule.length; i++) {
    var ch = molecule[i];
    //Non-bracket number handling
    if (!isNaN(Number(ch)) && isLetter(ch[i - 1])){
      multiplier[3] = Number(ch);
      var product = multiplier.reduce(function(p, c){return p * c;}, 1);
      //reset single atom multiplier
      multiplier[3] = 1;
      atoms[current] = product;
    }
    //Handle uppercase
    if (isLetter(ch)){
      if (isUpperCase(ch) && i && isNaN(Number(ch[i - 1]))) {
        //if not first instance, add current atom to dict
        if (current.length > 0){
          var product = multiplier.reduce(function(p, c){return p * c;}, 1);
          atoms[current] = product;
        }
        //reset current
        current = ch;
      }
      else {
        current += ch;
      }
    }

    //Square Bracket Logic Handling
    if (ch === '('){
      inRound = true;
      multiplier[1] = getMultiplier(i, ')');
    }
    if (ch === ')'){
      inRound = false;
      multiplier[1] = 1;
    } 

    //Square Bracket Logic Handling
    if (ch === '['){
      inSquare = true;
      multiplier[1] = getMultiplier(i, ']')
    }
    if (ch === ']'){
      inSquare = false;
      multiplier[1] = 1;
    } 

    //Curly Bracket Logic Handling
    if (ch === '{'){
      inCurly = true;
      multiplier[2] = getMultiplier(i, '}')
    }
    if (ch === '}'){
      inCurly = false;
      multiplier[2] = 1;
    } 
  }

  return atoms;

  function getMultiplier(index, bracketType){
    for (var i = index + 1; i < molecule.length; i++){
      if (molecule[i] === bracketType) return Number(molecule[i + 1]);
    }
  }
}
function isLetter(ch){
  var letters = ['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  return letters.indexOf(ch) >= 0;
}
function isUpperCase(ch){
  return ch.toUpperCase === ch;
}