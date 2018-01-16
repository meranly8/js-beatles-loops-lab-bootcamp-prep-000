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
  number = 0
  
  do {
    array[number] = ("I love the Beatles!")
    number++
  } while 
    (number < 15)
    return array
}  