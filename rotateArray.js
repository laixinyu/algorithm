var rotate = function(nums, k) {
    if (!nums || nums.length === 0) {
        return false
    }
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop())
    }
};