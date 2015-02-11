function parseMolecule(molecule){
  var atoms = {};
  var current = '';
  //Handle multipliers by looking for them immediately
  var multiplier = [1,1,1,1];
  var skipIndices = [];
  for (var i = 0; i < molecule.length; i++) {
    if (skipIndices.indexOf(i) !== -1) continue;
    var ch = molecule[i];
    //Non-bracket number handling
    if (!isNaN(Number(ch)) && isLetter(molecule[i - 1])){
      if(!isNaN(Number(molecule[i + 1]))){
        skipIndices.push(i + 1);
        multiplier[3] = Number(ch + molecule[i + 1]);
      }
      else {
        multiplier[3] = Number(ch);
      }
      var product = multiplier.reduce(function(p, c){return p * c;}, 1);
      //reset single atom multiplier
      multiplier[3] = 1;
      atoms[current] = atoms[current] || 0;
      atoms[current] += product;
      current = '';
    }
    //Handle uppercase
    if (isLetter(ch)){
      if (isUpperCase(ch) && i && isNaN(Number(molecule[i - 1]))) {
        //if not first instance, add current atom to dict
        if (current.length > 0){
          var product = multiplier.reduce(function(p, c){return p * c;}, 1);
          atoms[current] = atoms[current] || 0;
          atoms[current] += product;
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
      if (isLetter(molecule[i - 1])){
        var product = multiplier.reduce(function(p, c){return p * c;}, 1);
        atoms[current] = atoms[current] || 0;
        atoms[current] += product;
        current = '';
      }
      multiplier[0] = getMultiplier(i, ')');
    }
    if (ch === ')'){
      if (isLetter(molecule[i - 1])){
        var product = multiplier.reduce(function(p, c){return p * c;}, 1);
        atoms[current] = atoms[current] || 0;
        atoms[current] += product;
        current = '';
      }
      multiplier[0] = 1;
    } 

    //Square Bracket Logic Handling
    if (ch === '['){
      if (isLetter(molecule[i - 1])){
        var product = multiplier.reduce(function(p, c){return p * c;}, 1);
        atoms[current] = atoms[current] || 0;
        atoms[current] += product;
        current = '';
      }
      multiplier[1] = getMultiplier(i, ']')
    }
    if (ch === ']'){
      if (isLetter(molecule[i - 1])){
        var product = multiplier.reduce(function(p, c){return p * c;}, 1);
        atoms[current] = atoms[current] || 0;
        atoms[current] += product;
        current = '';
      }
      multiplier[1] = 1;
    } 

    //Curly Bracket Logic Handling
    if (ch === '{'){
      if (isLetter(molecule[i - 1])){
        var product = multiplier.reduce(function(p, c){return p * c;}, 1);
        atoms[current] = atoms[current] || 0;
        atoms[current] += product;
        current = '';
      }
      multiplier[2] = getMultiplier(i, '}')
    }
    if (ch === '}'){
      if (isLetter(molecule[i - 1])){
        var product = multiplier.reduce(function(p, c){return p * c;}, 1);
        atoms[current] = atoms[current] || 0;
        atoms[current] += product;
        current = '';
      }
      multiplier[2] = 1;
    } 
  }
  //Take care of last one
  if (!atoms[current] && current.length > 0){
    var product = multiplier.reduce(function(p, c){return p * c;}, 1);
    atoms[current] = atoms[current] || 0;
    atoms[current] += product;
  }
  return atoms;

  function getMultiplier(index, bracketType){
    for (var i = index + 1; i < molecule.length; i++){
      if (molecule[i] === bracketType) {
        var multiplier = Number(molecule[i + 1]);
        if (isNaN(multiplier)) multiplier = 1;
        return multiplier;
      }
    }
  }
}
function isLetter(ch){
  var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return letters.indexOf(ch) >= 0;
}
function isUpperCase(ch){
  return ch.toUpperCase() === ch;
}