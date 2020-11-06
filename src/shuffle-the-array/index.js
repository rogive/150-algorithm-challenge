var shuffle = function(nums, n) {
  let result = []
  for (let i=0; i < n ; i++){
      result.push(nums[i])
      result.push(nums[i+n])
  }
  return result
};
//console.log(shuffle([1,4,5,2,3,7], 3))