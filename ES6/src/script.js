//npm run watch

// class Animal {
// 	constructor(age) {
// 		this.age = age;
// 	}

// 	getAge () {
// 		console.log(this.age);
// 	}
// }
import { Animal } from './import.js';

class Person extends Animal {
	constructor(firstName,lastName,age,gender) {
		super(age);
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
	}

	static get MALE() {
		let n = 'male';
		return n;
	}

	static get FEMALE() {
		let n = 'female';
		return n;
	}

	getFirstName () {
		console.log(this.firstName);
	}

	getLastName () {
		console.log(this.lastName);
	}

	getGender () {
		console.log(this.gender);
	}

}

let monkey = new Animal(5);
monkey.getAge(); // => 5
let petr = new Person('Petr', 'Petrov', 20, Person.MALE);
petr.getAge(); // => 20
petr.getFirstName() + petr.getLastName(); // => Petr Petrov
petr.getGender() === Person.MALE ? 'male' : 'female'; // => male


console.log(monkey);
console.log(petr);

