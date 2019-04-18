/*
 Palindrome Number
 
 Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

*/

var isPalindrome = function(x) {
    const str = x.toString();
    if (str.length === 2) return str[0] === str[1];
	let left = 0;
	let right = str.length - 1;
	while(str[left] === str[right] && right - left >= 1) {
		left++;
		right--;
	}
	
	return left >= right;
};