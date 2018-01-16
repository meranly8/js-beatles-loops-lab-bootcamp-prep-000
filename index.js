function theBeatlesPlay(musicians,instruments) {
  const array = []
  
  for (let i = 0; i < musicians.length; i++ ){
    var musician = musicians[i]
    var instrument = instruments[i]
    
    array.push(`${musician} plays ${instrument}`)
  }
  return array
}

function johnLennonFacts(array){
  var i = 0
  while(i < array.length) {
    array[i] = array[i] + '!!!'
    i++
  }
  return array
}

function iLoveTheBealtes(number) {
  var array = []
  let i = number
  do {
    array.push("I love the Beatles!")
    i++
  } while 
    (i < 15)
    return array
}  