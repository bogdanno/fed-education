let add = (x, y) => x + y;
let emptyObj = () => ({});

let obj = {
	age: 15,
	name: function() {
		window.setTimeout(() => {
			console.log('My name is Bob and I\'m ' + this.age + ' years old.');
		}, 5000);
	}
}

console.log(add(5,6));
console.log(emptyObj());

obj.name();