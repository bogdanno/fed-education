function Model() {
	this.model;
	this.get("../model/data.json")
	.then(function(json) {
		return console.log(json);
	}, function(error) {
		return console.log(error);
	});
}

Model.prototype.get = function(url) {
return new Promise(function(resolve, reject) {
	var xml = new XMLHttpRequest();
	xml.open("GET", url , true);
	xml.onload = function() {
		// if( xml.readyState == 4) {
				if(this.status == 200) {
					var json = JSON.parse(xml.responseText);
					resolve(json);
				}
				else {
					var error = new Error(this.statusText);
        			error.code = this.status;
        			reject(error);
				// alert("Error request:" + xml.status + " " + xml.statusText);
				// this.model=null;
				//return null;
				}
			}
		xml.onerror = function() {
      		reject(new Error("Network Error"));
    	};
		//}
	xml.send();
});
};

