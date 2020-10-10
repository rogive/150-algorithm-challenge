function runningSum(nums) {
  resultado = []
  cont = 0
  for (let i = 0; i < nums.length; i++) {
    cont += nums[i]
    resultado.push(cont)
  }
  return resultado
}
//console.log(runningSum([1,3,5,2]))