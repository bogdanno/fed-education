
function initData(blocks, json) {
    var compile = Handlebars.compile(blocks);
	var result = compile(json);
    getPaint(result);
}

function getPaint(result) {
    var content = document.getElementById('blocksItem');
	content.innerHTML = result; 
   
}