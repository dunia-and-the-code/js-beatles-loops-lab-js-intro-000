// add solution here

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians} plays ${instruments}`);
  }
  return array;
    }
    


function johnLennonFacts(facts) {
      var i = 0;
      while (i < facts.length) {
        facts[i] = facts[i] + "!!!";
        i++;
      }
      return facts;
    }
    
var i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}

function iLoveTheBeatles(number) {
  var array = [];
    do {
      array.push("I love the Beatles!");
      number++;
    } while (number < 15);
      return array;
}

  

  