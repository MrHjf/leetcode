/**
Median of Two Sorted Arrays

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5

*/
var findMedianSortedArrays = function(nums1, nums2) {
    const totalSize = nums1.length + nums2.length;
    if (totalSize === 0) return null;
    if (totalSize === 1) return nums1.length > 0 ? nums1[0] : nums2[0];
    const medianIndex = (totalSize + 1) / 2;
    const minMedian = Math.floor(medianIndex);
    const maxMedian = Math.ceil(medianIndex);
    const result = [];
    for (let i = 0, j = 0; i + j < maxMedian;) {
        if (nums1[i] < nums2[j] || nums2[j] === undefined ) {
            result[i+j] = nums1[i++];
        } else {
            result[i+j] = nums2[j++];
        }
    }
    return (result[minMedian - 1] + result[maxMedian - 1]) / 2;
};