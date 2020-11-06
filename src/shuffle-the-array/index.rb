def shuffle(nums, n)
  result = []
  (0..n-1).each do |i|
    result.push(nums[i])
    result.push(nums[i+n])
  end
  return result
end