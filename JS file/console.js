
//3. консоль
for(var i=1;i<101;i++) {
	if (i%5 == 0 && i%3 == 0){
		console.log('Fizz' + 'Bizz');
	}
	else if (i%3 == 0) 
	{
		var three = i/3;
		console.log('Fizz' + " " + three);
	}
	else if (i%5 == 0 && i%3 != 0) 
	{
		var five = i/5;
		console.log('Buzz' + " " + five);
	}
	else {
		console.log(i);
	}

}

//5. рекурсия
// function rec(n) {
// 	var k;
// 	if (n==0) {
// 		return true;
// 	}
// 	else if(n==1) {
// 		return false;
// 	}
// 	else {
// 		k = rec(n-2);
// 	}
// return k;
// }
// console.log(rec(-1));

//7. Cумма диапазона 
// var mass = [];
// function range(m, n, k=1) {
// 	if (k>0){
// 	var n = n;
// 	for (var i=m; i<=n; i+=k){
// 	mass.push(i);
// 	}
// }
// 	else{
// 	for (var i=m; i>= n; i+=k){
// 	mass.push(i);
// 	}
// 	}
// 	return mass;
// }
// console.log(range(1, 10, 2));
// console.log(range(5, 2, -1));

// function sum(mass) {
// 	var sum=0;
// 	var len = mass.length;
// 	for(var i=0; i<len; i++){
// 		mass[i] = i;
// 		var n = mass[i];
// 		sum += n;
// 	}
// 	return sum;
// }
// console.log(sum(mass));

//8. Массив вспять
// function reverseArray(Arr) {
// 	var mass = [];
// 	for (var i=Arr.length-1; i>=0;i--){
// 	mass.push(Arr[i]);
// 	}
// 	return mass;
// }
// console.log(reverseArray(["A", "B", "C"]));

// function reverseArrayInPlace(arrayValue) {
// 	var n = arrayValue.length;
// 	for (var i=n-1; i>=0; i--) {
// 		for (var j = n-1-i; j>=0 ; j--){ 
// 			if (arrayValue[j-1] < arrayValue[j]) { 
//            	var t = arrayValue[j-1]; 
//            	arrayValue[j-1] = arrayValue[j]; 
//            	arrayValue[j] = t; 
//            }
// 		}
// 	}
// }
// var arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);

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
//  if (typeof(w)=="object" && typeof(q)=="object" ) {
//  	var b = w===q;
//  	return b;
//  }
//  else return false;
// }
// var obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// var obj2 = {here: {is: "an1"}, object: 2};
// console.log(deepEqual(obj2, obj));
//console.log(deepEqual(obj, {here: 1, object: 2}));

//14. every+some
// var i=0;
// function every(mass) {
// for(i=0;i<mass.length;i++) {
// 	var a = mass[i];
// 		if (!isNaN(a)){
// 			return false;
// 		}
// 	}
// return true;  
// }

// function some(mass) {
// for(i=0;i<mass.length;i++) {
// 	var a = mass[i];
// 	if (isNaN(a)) {
// 	return true;
// 	}
// 	else return false;
// 	}
// }
// // console.log(every([NaN, NaN, NaN], isNaN));
// // console.log(every([NaN, NaN, 4], isNaN));
// // console.log(some([NaN, 3, 4], isNaN));
// // console.log(some([2, 3, 4], isNaN));

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