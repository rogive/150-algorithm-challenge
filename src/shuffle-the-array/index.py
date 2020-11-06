def shuffle(nums, n) :
  result = []
  for i in range(n) :
    result.append(nums[i])
    result.append(nums[i+n])
  return result
print(shuffle([1,3,5,2,7,4],3))