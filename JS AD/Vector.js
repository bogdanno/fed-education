function Vector(x,y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.coordinates = function(other) {
	return new Vector(this.x + other.x, this.y + other.y);
}



