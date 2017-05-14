'use strict';

var add = function add(x, y) {
	return x + y;
};
var emptyObj = function emptyObj() {
	return {};
};

var obj = {
	age: 15,
	name: function name() {
		var _this = this;

		window.setTimeout(function () {
			console.log('My name is Bob and I\'m ' + _this.age + ' years old.');
		}, 5000);
	}
};

console.log(add(5, 6));
console.log(emptyObj());

obj.name();