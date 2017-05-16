function Grass(x, y) {
	this.name = "Grass";
	this.symbol = "*";
	this.vector = new Vector(x, y);
}

Grass.prototype = Object.create(Nature.prototype);

Grass.prototype.makeAction = function() {
	//var coordinates = Find.findCoordinates(this.name, this.vector);
	this.stepGrace(this.vector);
}

Grass.prototype.stepGrace = function(coordinates) {
	if(mass[coordinates.x][coordinates.y] !== "Space") {
		if(mass[coordinates.x][coordinates.y].name === "Grass") {
			mass[this.vector.x][this.vector.y].energy += 0.2;
			//console.log(mass);
		}
	}
}
