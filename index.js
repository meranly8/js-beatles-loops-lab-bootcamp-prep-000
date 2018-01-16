function theBeatlesPlay(musicians,instruments) {
  const array = []
  
  for (let i = 0; i < musicians.length; i++ ){
    musician = musicians[i]
    instrument = instruments[i]
    
    array.push(`${musicians} plays ${instruments}`)
  }
  return array
}