/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false
*/

/* 
	第一种
	Runtime: 592 ms, faster than 17.00% of JavaScript online submissions for Search a 2D Matrix II.
	Memory Usage: 37.3 MB, less than 73.68% of JavaScript online submissions for Search a 2D Matrix II.	
*/	
export var searchTargetIn2DMatrix = (matrix, target) => {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > target) {
                break;
            } else if (matrix[i][j] === target) {
                return true;
            }
        }
    }
    return false;
};

export var searchTargetIn2DMatrixU = (matrix, target) => {
	let len = matrix[0] ? matrix[0].length - 1 : 0;
	for (let i = 0; i < matrix.length; i++) {
		if (matrix[i][len] < target) {
			continue;
		} else if (matrix[i][len] === target) {
			return true;
		} else {
			len = len - 1;
		}
        for (let j = 0; j <= len; j++) {
            if (matrix[i][j] > target) {
                break;
            } else if (matrix[i][j] === target) {
                return true;
            }
        }
    }
    return false;
};
// 加参数校验， 加二分法查找
export var searchTargetIn2DMatrixUUU = (matrix, target) => {
	if (matrix == null || matrix.length == 0) return false;
	const len = matrix.length;
	for (let i = 0; i < len; i++) {
		const row = matrix.shift();
		let left = 0, right = row.length - 1;
		while (left <= right) {
			const mid = left + parseInt((right - left) / 2);
			if (row[mid] == target) {
				return true;
			} else if (row[mid] > target) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		}
	}
	return false;
}