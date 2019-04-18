/*
Container With Most Water
*/

//ÊäÈë£º [1,8,6,2,5,4,8,3,7]
//²ú³ö£º 49
var maxArea = function(height) {
    let max = 0;
	for (let left = 0, right = height.length - 1; left < right;) {
		const top = Math.min(height[left], height[right]);
		max = Math.max(max, top * (right - left));
		if (height[left] > height[right]) {
			right--;
		} else {
			left++;
		}
	}
	return max;
};