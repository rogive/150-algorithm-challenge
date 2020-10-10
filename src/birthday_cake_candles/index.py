def birthdayCakeCandles(candles):
  height_highest = max(candles)
  count = 0
  for candle in candles :
    if height_highest == candle :
      count += 1
  return count
#print (birthdayCakeCandles([4,2,4,1,4]))