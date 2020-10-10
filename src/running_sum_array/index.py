def runningSum(nums) :
  resultado = []
  cont = 0
  for i in range(len(nums)) :
      cont += nums [i]
      resultado.append(cont)
  return resultado
#print(runningSum([1,3,5,2]))