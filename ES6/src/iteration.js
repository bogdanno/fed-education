
	let str = "some";
	let arr = str.split('');
	for(let number of arr) {
		console.log(number);
	}
	let iterator = arr[Symbol.iterator]();
	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());
