function Find(arr) {
	this.arr = arr;
}

Find.findCoordinatesGrass = function(search, vector) {
	var massSpace = [];
	for(var i=vector.x-1; i <= vector.x+1; i++) {
		for(var j=vector.y-1; j <= vector.y+1; j++){
			if(mass[i][j].name === search ) {
				//console.log(new Vector(i,j))
				//return new Vector(i,j);
				massSpace.push(mass[i][j]);
			}
		}
	}
	if(massSpace.length !== 0) {
	return massSpace[Math.floor(Math.random() * massSpace.length)].vector;
	}
	else{
		return null;
	}
}

Find.findCoordinatesRandomSpace = function(search, vector) {
	var massSpace = [];
	for(var i=vector.x-1; i <= vector.x+1; i++) {
		for(var j=vector.y-1; j <= vector.y+1; j++){
		if (mass[i][j].name === search) {
			massSpace.push(mass[i][j]);
			//return new Vector(i,j);
			}
		}
	}
	if(massSpace.length !== 0) {
	return massSpace[Math.floor(Math.random() * massSpace.length)].vector;
	}
	else{
		return vector;
	}
}

Find.findRandomSpace = function() {
	var massRandom = [];
	for(var i=0; i < mass.length; i++) {
		for(var j=0; j < mass[0].length; j++){
		if (mass[i][j].name === "Space") {
			massRandom.push(mass[i][j]);
			//return new Vectoć(i,j);
			}
		}
	}
	if(massRandom.length !== 0) {
	return massRandom[Math.floor(Math.random() * massRandom.length)].vector;
	}
	else{
		return null;
	}
}
