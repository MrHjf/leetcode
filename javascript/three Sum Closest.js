/*
3Sum Closest

Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

*/

var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
	let closest = nums[0] + nums[1] + nums[nums.length - 1];
	
	for (let i = 0; i < nums.length - 2; i++) {
		for (let j = i + 1, k = nums.length - 1; j < k;) {
			const temp = nums[i] + nums[j] + nums[k];
			const diff = temp - target;
			if (diff < 0) {
				j++;
			} else if (diff > 0) {
				k--;
			} else {
				return target;
			}
			if (Math.abs(diff) < Math.abs(target - closest)) {
				closest = temp;
			}
		}
	}
	return closest;
};
