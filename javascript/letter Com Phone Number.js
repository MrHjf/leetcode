export var letterComPhoneNumer = (digits) => {
	const numToStrMap = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
	
	if (digits.length === 1) return numToStrMap[digits].split();
	
	let res = dig(numToStrMap[digits[0]], numToStrMap[digits[1]]);
	for (let i = 2; i < digits.length; i++) {
		res = dig(res, numToStrMap[digits[i]]);
	}
	
	function dig(a, b) {
		const res = [];
		for (let i = 0;i<a.length;i++) {
			for (let j = 0; j < b.length; j++) {
				res.push(a[i]+b[j]);
			}
		}
		return res;
	}
	
	return res;
}