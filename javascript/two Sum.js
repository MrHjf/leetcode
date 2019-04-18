/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

export const twoSum = (nums, target) => {
    const tempArr = [];
    let result = [];
    nums.forEach((val, index) => {
        const diff = target - val;
        if (tempArr[diff] !== undefined) {
            result = [tempArr[diff], index];
        } else {
            tempArr[val] = index;
        }
    });
    return result;
};
console.log(twoSum([2,6,5,9,4], 9));