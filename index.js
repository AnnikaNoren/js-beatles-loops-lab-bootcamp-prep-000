function theBeatlesPlay(musicians, instruments){
  var array = [];

  for (var i = 0; i <= musicians.length; i++) {
    //tempString = "\(musicians[i]) plays \(instruments[i])"
    array.push(musicians[i] + " plays " + instruments[i])
  }

  return array
}

function johnLennonFacts(facts){
  var johnLennonFacts = []
  i = 0

  while (i < facts.length){
    johnLennonFacts.push(facts[i] + "!!!")
    i++
  }

  return johnLennonFacts;
}
