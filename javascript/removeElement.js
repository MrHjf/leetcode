export var removeElement = (arr, target) => {
	for (let i = 0; i< arr.length;) {
		if (arr[i] === target) {
			arr.splice(i, 1);
		} else {
			i++
		}
	}
	return arr.length;
}
