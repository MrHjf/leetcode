/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true

*/

export var validParentheses = (s) => {
	const res = [];
	for (let i = 0; i < s.length; i++ ) {
		const temp = res[res.length - 1] + s[i];
		if (res[res.length - 1] && (temp === '()' || temp === '{}' || temp === '[]')) {
			res.pop();
		} else {
			res.push(s[i])
		}
	}
	return !res.length;
}