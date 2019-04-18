/**
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function(s) {
    let len = 0;
    let tempLen = 0;
    let tempStr = '';
    for (let i = 0; i< s.length; i++) {
        const index = tempStr.indexOf(s[i]);
        if (index === -1) {
            tempStr += s[i];
            tempLen++;
            len = Math.max(tempLen, len);
        } else {
            tempStr = tempStr.substring(index+1) + s[i];
            len = Math.max(tempLen, len);
            tempLen = tempStr.length;
        }
    }
    return len;
};