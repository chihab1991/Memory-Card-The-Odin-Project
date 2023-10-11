export default function resetArray(array) {
	const newArr = array.map((el) => {
		if (true) {
			return { ...el, clicked: false };
		}
	});
	return newArr;
}
