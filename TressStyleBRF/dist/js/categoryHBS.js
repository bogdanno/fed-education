var xml = new XMLHttpRequest();
xml.open("GET", "../model/data.json", true);
xml.onreadystatechange = function() {
	if( xml.readyState == 4) {
		if(xml.status == 200) {
			var json = JSON.parse(xml.responseText);
			var blocks = document.getElementById('category').innerHTML;
			var init = initData(blocks, json);

			// var json = JSON.parse(xml.responseText),
			// block = document.getElementById('category').innerHTML,
			// compile = Handlebars.compile(block);
			//console.log(compile);
			// result = compile(json),
			// content = document.getElementById('category-cards');
			// content.innerHTML = result;
			//console.log(result);
		}
		else {
		alert("Error request:" + xml.status + " " + xml.statusText);
		}
	}
};

xml.send(null);