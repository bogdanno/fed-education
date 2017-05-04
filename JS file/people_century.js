function centuryPeoples() {
	var century16 = [];
	var century17 = [];
	var century18 = [];
	var century19 = [];
	var century20 = [];
	var century21 = [];
	var agePeople = {};
	var people = elementJson;
	for(i=0;i<people.length;i++) {
		var age = people[i].died - people[i].born;
		var died = Math.ceil(people[i].died / 100);
		switch (died) {
  		case 16:
    		century16.push(age);
    		break;
  		case 17:
    		century17.push(age);
    		break;
  		case 18:
    		century18.push(age);
    		break;
    	case 19:
    		century19.push(age);
    		break;
    	case 20:
    		century20.push(age);
    		break;
    	case 21:
    		century21.push(age);
    		break;
		}
	}
	var cen16 = calculate(century16);
	var cen17 = calculate(century17);
	var cen18 = calculate(century18);
	var cen19 = calculate(century19);
	var cen20 = calculate(century20);
	var cen21 = calculate(century21);
	agePeople['16'] = cen16;
	agePeople['17'] = cen17;
	agePeople['18'] = cen18;
	agePeople['19'] = cen19;
	agePeople['20'] = cen20;
	agePeople['21'] = cen21;
	console.log(agePeople);
}

function calculate(mass) {
	var sum = 0;
	for(j=0;j<mass.length;j++) {
		sum += mass[j];
	}
	var n = (sum / mass.length).toFixed(1);
	return n;
}
console.log(centuryPeoples());