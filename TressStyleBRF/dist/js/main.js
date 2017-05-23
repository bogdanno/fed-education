function getData() {
	var xml = new XMLHttpRequest();
	xml.open("GET", "../model/data.json", true);

	xml.onreadystatechange = function() {
	if( xml.readyState == 4) {
		if(xml.status == 200) {
			var json = JSON.parse(xml.responseText);
			var blocks = document.getElementById('blocks').innerHTML;
			var init = initData(blocks, json);
			// var content = document.getElementById('category-blocks');
			// content.innerHTML = init;
		}
		else {
		alert("Error request:" + xml.status + " " + xml.statusText);
		}
	}
};

xml.send();
}

getData();