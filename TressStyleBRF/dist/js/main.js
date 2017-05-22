var xml = new XMLHttpRequest();
xml.open("GET", "js/model/data.json", true);

xml.onreadystatechange = function() {
	if( xml.readyState == 4) {
		if(xml.status == 200) {
			var json = JSON.parse(xml.responseText);
			var compile = Handlebars.compile(blocks.innerHTML);
			var result = compile(json);
			var content = document.getElementById('category-blocks');
			content.innerHTML = result;
			//console.log(result);
		}
		else {
		alert("Error request:" + xml.status + " " + xml.statusText);
		}
	}
};

xml.send(null);


