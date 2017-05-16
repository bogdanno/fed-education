function Nature() {	
	this.doit();
}

Nature.prototype.doit = function() {
	var energyMass = this.energyAnimal();
}

Nature.prototype.energyAnimal = function() {
	for(var i=0 ; i < mass.length; i++) {
		for(var j=0; j < mass[0].length; j++){
			// console.log(mass[i][j]);
			if (mass[i][j] !== null) {
			if(mass[i][j].name == "Herbivores") {
				mass[i][j].energy = 1;
			}
			else if(mass[i][j].name == "Grass") {
				mass[i][j].energy = 0.4;
			}
			}
		}
	}
	return mass;
}

Nature.energyOneGrass = function(vector) {
	mass[vector.x][vector.y].energy = 0.2;
}


