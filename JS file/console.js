
//3. консоль
// for(var i=1;i<101;i++) {
// 	if (i%5 == 0 && i%3 == 0){
// 		console.log('Fizz' + 'Bizz');
// 	}
// 	else if (i%3 == 0) 
// 	{
// 		var three = i/3;
// 		console.log('Fizz' + " " + three);
// 	}
// 	else if (i%5 == 0 && i%3 != 0) 
// 	{
// 		var five = i/5;
// 		console.log('Buzz' + " " + five);
// 	}
// 	else {
// 		console.log(i);
// 	}

// }

//5. рекурсия
// function rec(val) {
// 	var k;
// 	if(val < 0){
// 		return rec(-val);
// 	}
// 	else if (val===0) {
// 		return true;
// 	}
// 	else if(val===1) {
// 		return false;
// 	}
// 	else {
// 		k = rec(val-2);
// 	}
// return k;
// }
// console.log(rec(-1));
// console.log(rec(50));
// console.log(rec(75));

//6.бобы
// function countBs(stringB) {
// 	var length = stringB.length;
// 	var count = 0;
// 	for(i=0; i<length; i++) {
// 		var c = stringB.charAt(i)
// 		if(c=="B")
// 		{count++;}	
// 	}
// 	return count;
// }
// console.log(countBs("Hi BoB!"));
//бобы - второй символ
// function countChar(stringC, c) {
// 	var length = stringC.length;
// 	var count = 0;
// 	for(i=0; i<length; i++) {
// 		var simbol = stringC.charAt(i)
// 		if(simbol==c)
// 		{count++;}
// 	}
// 	return count;
// }
// console.log(countChar("Hi BoB!", "H"));

//7. Cумма диапазона 
// var mass = [];
// function range(first, second, step) {
// if (step == undefined) {
// 	step = 1;
// 	var second = second;
// 	for (var i = first; i <= second; i+=step) {
// 		mass.push(i);
// 	}
// 	return mass;
// }
// else {
// 	if (step > 0) {
// 	var second = second;
// 	for (var i = first; i <= second; i+=step) {
// 		mass.push(i);
// 	}
// }
// 	else {
// 	for (var i = first; i >= second; i+=step) {
// 		mass.push(i);
// 		}
// 	}
// 	return mass;
// }
// }
// console.log(range(1, 10));
// console.log(range(5, 2, -1));

// function sum(mass) {
// 	var sum=0;
// 	var len = mass.length;
// 	for(var i=0; i<len; i++){
// 		sum += mass[i];
// 	}
// 	return sum;
// }
// console.log(sum([8,7,10]));

//8. Массив вспять
// function reverseArray(arr) {
// 	var mass = [];
// 	for (var i=arr.length-1; i>=0;i--){
// 	mass.push(arr[i]);
// 	}
// 	return mass;
// }
// console.log(reverseArray(["A", "B", "C"]));

// function reverseArrayInPlace(mass) {
// 	var len = mass.length - 1;
//     var i = 0, temp;
//     while (i < len - i) {
//         temp = mass[i];
//         mass[i] = mass[len - i];
//         mass[len - i] = temp;
//         i++;
//     }
//     return mass;
// }
	// var n = arrvalue.length;
	// for (var i=n-1; i>=0; i--) {
	// 	for (var j = n-1-i; j>=0 ; j--){ 
	// 		if (arrvalue[j-1] < arrvalue[j]) { 
 //           	var t = arrvalue[j-1]; 
 //           	arrvalue[j-1] = arrvalue[j]; 
 //           	arrvalue[j] = t; 
 //           }
	// 	}
	// }
// var mass = [0, 1, 2, 3, 4, 5];
// console.log(mass.reverse());
// reverseArrayInPlace(mass);
// console.log(mass);



//9. Список
// function arrayToList(arr) {
	
// 	var i=0;
// 	var list=getElem(arr, i)

// 	return list; 
// }
// console.log(arrayToList([10, 20, 30]));

// function getElem(arr,i){
// 	var b={};
// 	if(i<arr.length-1)
// {
// b.value=arr[i];
// b.serf=getElem(arr,++i);}
// else
// 	{b.value=arr[i];
// b.serf=null;
// return b;}
// return b;
// }

// function listToArray(list) {
// 	var arr = [];
// 	var flag=true;
// 	while(flag) {
// 		if(list.serf==null)
// 			flag=false;
// 		arr.push(list.value);
// 		list = list.serf;
// 	}
// 	return arr;
// }
// console.log(listToArray(arrayToList([10, 20, 30])));

//10. Глубокое сравнение  
// function deepEqual(w,q) {
//  if (typeof(w)==="object" && typeof(q)==="object" ) {
//  	var listw = Object.keys(w);
//  	var listq = Object.keys(q);
//  	if(listw.length != listq.length) {
//  		return false;
//  	}
//  	for (var i=0;i<listw.length;i++) {
//  		var value = deepEqual(w[listw[i]],q[listw[i]]);
//  		if(value === false) {
//  			return value;
//  		}	
//  	}
//  	return value;
//  }
//  else if(w===q){
//  	return true;
//  }
//  else {
//  	return false;
//  }
// }
// var obj = {here: {is: "an"}, object: 2};
//console.log(deepEqual(obj, obj));
// var obj2 = {here: {is: "an1"}, object: 2};
// console.log(deepEqual(obj2, obj));
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2, name: "lisa"}));

//14. every+some
// var i=0;
// function every(mass,func) {
// for(i=0;i<mass.length;i++) {
// 	var a = mass[i];
// 		if (!func(a)){
// 			return false;
// 		}
// 	}
// return true;  
// }

// function some(mass,func) {
// for(i=0;i<mass.length;i++) {
// 	var a = mass[i];
// 	if (func(a)) {
// 	return true;
// 	}
// 	else return false;
// 	}
// }
// console.log(every([NaN, NaN, NaN], isNaN));
// console.log(every([NaN, NaN, 4], isNaN));
// console.log(some([NaN, 3, 4], isNaN));
// console.log(some([2, 3, 4], isNaN));

//15. Повтор
// function MultiplicatorUnitFailure() {
// 	this.name = "MultiplicatorUnitFailure";
// }

// function primitiveMultiply(a, b) {
//   if (Math.random() < 0.5)
//     return a * b;
//   else
//     throw new MultiplicatorUnitFailure();
// }

// function reliableMultiply(a, b) {
// 	try {
// 		var aa=primitiveMultiply(a,b);
// 		return aa;
// 	}
// 	catch(e){
// 		if(e.name == "MultiplicatorUnitFailure"){
// 			reliableMultiply(a, b);
// 		}
// 	}
// }
// console.log(reliableMultiply(8, 8));