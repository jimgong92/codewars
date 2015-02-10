/*
  {Na[Mg(OH)2]3}2
  Na: 2
  Mg: 6
  O: 12
  H: 12

  If it is within a type of braces, has the 

*/
function parseMolecule(molecule){
  var atoms = {};
  var current = '';
  //Handle multipliers by looking for them immediately
  var multiplier = 1;
  var isRound = false;
  for (var i = 0; i < molecule.length; i++) {
    var ch = molecule[i];
    //If letter
    if (isNaN(Number(ch))){
      //if a bracket, toggle group
      if (ch === '(') isGroup = true;
      else if (ch === ')') {
        isGroup = false;
        multiplier = 1;
      }
      //if upper case
      else if (ch === ch.toUpperCase()){
        if (current.length > 0){
          //add previous atom to atoms with multiplier
          atoms[current] = multiplier;
          if ()
        }
      }
      //if lowercase, add to current
      else {
        current += ch;
      }
    }
  }
}