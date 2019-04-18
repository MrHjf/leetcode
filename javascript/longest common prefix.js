/*
Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0 || Object.prototype.toString.call(strs) !== '[object Array]') return '';
	let commonPrefix = strs[0];
	for (let i = 1; i < strs.length;i++) {
		while(strs[i].indexOf(commonPrefix) != 0) {
			commonPrefix = commonPrefix.substring(0, commonPrefix.length - 1);
		}
		if (commonPrefix.length === 0) break;
	}
	return commonPrefix;
};