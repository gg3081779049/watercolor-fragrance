// 获取下一个唯一的最小值
module.exports.getNextUniqueMin = function (nums, min = 1) {
    const numSet = new Set(nums)
    while (numSet.has(min)) min++
    return min
}