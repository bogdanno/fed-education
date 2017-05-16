var mass;

function World(grid) {
	var massGrid = massObj(grid);
	mass = massGrid;
	//var nature = new Nature(massGrid);
	var energy = new Nature(massGrid);
	var find = new Find(massGrid);
	 this.start();
	//console.log(massGrid);
}

World.prototype.start = function() {
	setInterval(function() {
		mass = getGrid();
		printShow(mass); 
	}, 500);
	setInterval(function() {
		var randomSpace = Find.findRandomSpace();
			if(randomSpace !== null) {
			mass[randomSpace.x][randomSpace.y] = new Grass(randomSpace.x,randomSpace.y);
			var energyGrass = Nature.energyOneGrass(randomSpace);
			printShow(mass);
			}
	}, 100);
	}


function massObj(grid) {
	var arr = new Array();
	for(var i=0 ; i < grid.length; i++) {
	arr[i]=[]; 
		for(var j=0; j < grid[0].length; j++){
			if(grid[i][j] === "#") {
				var stone = new Stone();
				arr[i][j]=stone;
			}
			else if(grid[i][j] === " ") {
				var space = new Space(i,j);
				arr[i][j] = space;
			}
			else if(grid[i][j] === "*") {
				var grass = new Grass(i, j);
				arr[i][j] = grass;
			}
			else if(grid[i][j] === "o") {
				var herbivores = new Herbivores(i, j);
				arr[i][j] = herbivores;
			}
		}
	}
	return arr;
}

function getGrid() {
	var arr = mass;
	for(var i=0; i < arr.length; i++) {
	for(var j=0; j< arr[0].length; j++) {
		if(arr[i][j].name !== "Space") {
			if(arr[i][j].name !== "Stone"){
				arr[i][j].makeAction();
				} 
			}
		}
	}
	return arr;
}

function printShow(arr) {
	var str = "";
	for(var i=0; i < arr.length; i++) {
	for(var j=0; j< arr[0].length; j++) {
		if(arr[i][j].name === "Herbivores") {
			// str += arr[i][j].symbol;
			str += "<font color="+arr[i][j].color+">"+arr[i][j].symbol+"</font>";
		}
		else {
			str+=arr[i][j].symbol;
		}
	}
		str = str + '\n';
}
	// str += "</p>";
	var elem = document.getElementById('data');
	elem.innerHTML = str;
}