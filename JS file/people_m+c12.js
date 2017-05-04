function searchMotherandChildren() {
	var people = elementJson;
	var arrM = [];
	for(i=0;i<people.length;i++) {
		if (people[i].mother != null) {
			var children = people[i];
			var motherName = people[i].mother;
			for(j=0;j<people.length;j++){
				var objec = {};
				if (motherName == people[j].name) {
				objec.children = children;
				objec.mother = people[j];
				arrM.push(objec);
				}
			}
		}
	}
	return arrM;
}
console.log(searchMotherandChildren());
var gg = searchMotherandChildren();
calculateTheDifference(gg);
var valueD = calculateTheDifference(gg);
function calculateTheDifference(arrM) {
 	var a = 0;
 	for(i=0;i<arrM.length;i++) {
 		a +=arrM[i].children.born - arrM[i].mother.born;
 	}
 	var diff = a/arrM.length;
 	return diff;
};
document.write('<br/>');
document.write('<br/>');
document.write('12.Разница в возрасте матерей и их детей<br/>');
document.write(valueD);





