var twoSum = function(nums, target) {
    // approach 3
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        let distance = target - nums[i]
        if (map.has(distance)) {
            return [map.get(distance),i];
        }
        map.set(nums[i],i);
    }
};