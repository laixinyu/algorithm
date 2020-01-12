var moveZeroes = function(nums) {
    let firstZero = 0;
    let numLen = nums.length;
    for (let i = 0; i < numLen; i++) {
        if (nums[i] != 0) {
            nums[firstZero++] = nums[i];
        }
    }
    for (let j = firstZero; j < numLen; j++ ) {
        nums[j] = 0;
    }
    return nums
};
