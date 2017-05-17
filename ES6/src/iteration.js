function makeCharIterator(a) {
	let str = a;
	let i =0;
	//let arr = str.split("");
	//let iterator = arr[Symbol.iterator];
	return {
		[Symbol.iterator]: () => ({
			next: () => {
				return i < str.length ? { 
					value: { char: str[i++]},
					done:false
				} : {
					done: true
				};
			}
		}),

		next: function(){
			return i < str.length ? { 
				value: { char: str[i++]},
					done:false
				} : {
					done: true
				};
			}
		}

};

let iterator = makeCharIterator('some');

for(let info of iterator) {
 console.log(info); // {char: 's'}
}


let iterator2 = makeCharIterator('some');
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());