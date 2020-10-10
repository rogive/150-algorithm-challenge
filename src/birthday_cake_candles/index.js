function birthdayCakeCandles(candles) {
  return candles.filter(elem => elem === Math.max(...candles)).length
}
//console.log(birthdayCakeCandles([4,2,4,1,4,2,4,1,2,3]))