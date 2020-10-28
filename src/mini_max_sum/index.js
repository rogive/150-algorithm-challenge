function miniMaxSum(arr) {
  var respuesta = [0, 0]
  arr.sort()
  for(let i=0; i < arr.length; i++) {
      if(i < 4){
          respuesta[0] += arr[i]
      }
      if(i >= arr.length - 4){
          respuesta[1] += arr[i]
      }
  }
  console.log(...respuesta)
  return (respuesta)
}

miniMaxSum([5, 4, 3, 6, 2, 1])