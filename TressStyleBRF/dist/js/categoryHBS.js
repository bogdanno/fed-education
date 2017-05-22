var xml = new XMLHttpRequest();
xml.open("GET", "js/model/data.json", true);

xml.onreadystatechange = function() {
	if( xml.readyState == 4) {
		if(xml.status == 200) {
			var json = JSON.parse(xml.responseText),
			compile = Handlebars.compile(block.innerHTML);
			result = compile(json),
			content = document.getElementById('category-cards');
			content.innerHTML = result;
		}
		else {
		alert("Error request:" + xml.status + " " + xml.statusText);
		}
	}
};

xml.send(null);