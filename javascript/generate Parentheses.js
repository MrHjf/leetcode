/*
Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

export var generateParentheses = n => {
	const result = [];
	
	function handle(list, str, i, j) {
		if (str.length === n * 2) {
			result.push(str);
			return;
		}
		if (i < n) {
			handle(list, str + '(', i + 1, j);
		}
		if (j < i) {
			handle(list, str + ')', i, j + 1);
		}
	}
	
	handle(result, '', 0, 0);
	return result;
}