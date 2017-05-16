function Herbivores(x, y) {
	this.name = "Herbivores";
	this.symbol = "o";
	this.vector = new Vector(x, y);
	this.color = "green";
}
Herbivores.prototype = Object.create(Nature.prototype);

Herbivores.prototype.makeAction = function() {
	var coordinates = Find.findCoordinatesGrass("Grass", this.vector);
	if (coordinates == null) {
		coordinates = Find.findCoordinatesRandomSpace("Space", this.vector);
	}
	this.stepHerbivores(coordinates);
}

Herbivores.prototype.stepHerbivores = function(coordinates) {
		if(mass[coordinates.x][coordinates.y].name === "Grass") {
			mass[this.vector.x][this.vector.y].energy += mass[coordinates.x][coordinates.y].energy;
		this.colorAnimalifEatGrass();
		this.newMass(mass,coordinates);
		}
		else if (mass[coordinates.x][coordinates.y].name === "Space") {
			mass[this.vector.x][this.vector.y].energy -= 0.1;
			this.colorAnimalifEatSpace();
			this.newMass(mass,coordinates);
		}
}

Herbivores.prototype.newMass = function(mass, coordinates) {
	mass[coordinates.x][coordinates.y] = mass[this.vector.x][this.vector.y];
	mass[this.vector.x][this.vector.y] = new Space(this.vector.x,this.vector.y);
	mass[coordinates.x][coordinates.y].vector = new Vector(coordinates.x, coordinates.y);
	// console.log(mass);
	return mass;
} 

Herbivores.prototype.colorAnimalifEatGrass = function() {
			if(this.energy > 5) {
				this.color = "red";
				// if(this.energy > 80) {
				// 	this.animalBorn();
				// }
			}
			else if(this.energy < 5 && this.energy > 1){
				this.color = "green";
			}
}

Herbivores.prototype.colorAnimalifEatSpace = function() {
			if(this.energy < 0.1) {
				this.color = "blue";
				this.animalDied();
			}
			else if (this.energy < 5 && this.energy > 1){
				this.color = "green";
			}
}

Herbivores.prototype.animalDied = function() {
	mass[this.vector.x][this.vector.y] = new Space(this.vector.x,this.vector.y);
	return mass;
}

// Herbivores.prototype.animalBorn = function(massSpace) {
// 	if(massSpace.length !== 0) {
// 	return massSpace[Math.floor(Math.random() * massSpace.length)].vector;
// }
// 	return mass;
// }
