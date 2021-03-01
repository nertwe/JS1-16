numbers = [[6, 7, 8], [[9, 10], [11, 12]], [13, 14], [[15, [16, [18]]]], [19, 20], 1, 2, 3, 4, 5];
function arrayClone (array) {
	let i, clone;
	// Если это массив, то клонируем его
	if (Array.isArray(array)) {
		// Делаем одноуровневую копию массива
		clone = array.slice();
		// Цикл для продвижения в глубь массива
		for (i = 0; i < clone.length; i++) {
			// Делаем рекурсию для копии каждого уровня
			clone[i] = arrayClone(clone[i]);
		}
		return clone;
	} else {
		return array;
	}
}
console.log(arrayClone(numbers));
