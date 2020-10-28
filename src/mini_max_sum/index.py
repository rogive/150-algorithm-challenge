def miniMaxSum(arr) :
  respuesta = [0, 0]
  for i in range(len(arr)) :
      if(i < 4) :
        respuesta[0] += arr[i]
      if(i >= len(arr) - 4) :
        respuesta[1] += arr[i]
  return respuesta

print(miniMaxSum([1,3,5,2,4,6]))