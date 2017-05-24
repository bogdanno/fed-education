function View(data) {
	initData(data);
}


function initData(json) {
	var blocks = document.getElementById('blocks').innerHTML;
    var compile = Handlebars.compile(blocks);
	var result = compile(json);
    getPaint(result);
}

function getPaint(result) {
    var content = document.getElementById('blocksItem');
	content.innerHTML = result;  
}