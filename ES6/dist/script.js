'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _import = require('./import.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //npm run watch

// class Animal {
// 	constructor(age) {
// 		this.age = age;
// 	}

// 	getAge () {
// 		console.log(this.age);
// 	}
// }


var Person = function (_Animal) {
	_inherits(Person, _Animal);

	function Person(firstName, lastName, age, gender) {
		_classCallCheck(this, Person);

		var _this = _possibleConstructorReturn(this, (Person.__proto__ || Object.getPrototypeOf(Person)).call(this, age));

		_this.firstName = firstName;
		_this.lastName = lastName;
		_this.gender = gender;
		return _this;
	}

	_createClass(Person, [{
		key: 'getFirstName',
		value: function getFirstName() {
			console.log(this.firstName);
		}
	}, {
		key: 'getLastName',
		value: function getLastName() {
			console.log(this.lastName);
		}
	}, {
		key: 'getGender',
		value: function getGender() {
			console.log(this.gender);
		}
	}], [{
		key: 'MALE',
		get: function get() {
			var n = 'male';
			return n;
		}
	}, {
		key: 'FEMALE',
		get: function get() {
			var n = 'female';
			return n;
		}
	}]);

	return Person;
}(_import.Animal);

var monkey = new _import.Animal(5);
monkey.getAge(); // => 5
var petr = new Person('Petr', 'Petrov', 20, Person.MALE);
petr.getAge(); // => 20
petr.getFirstName() + petr.getLastName(); // => Petr Petrov
petr.getGender() === Person.MALE ? 'male' : 'female'; // => male


console.log(monkey);
console.log(petr);