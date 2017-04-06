if (window.screen.availHeight != null) {
	var availHe = document.getElementById('availH');
	availHe.innerHTML = screen.availHeight;
}
if (window.screen.colorDepth != null) {
	var availHe = document.getElementById('availD');
	availHe.innerHTML = screen.colorDepth;
}
if (window.screen.availWidth != null) {
	var availHe = document.getElementById('availW');
	availHe.innerHTML = screen.availWidth;
}

if (window.screen.height != null){
	var availHe = document.getElementById('heigh');
	availHe.innerHTML = screen.height;
}
if (window.screen.pixelDepth != null){
	var availHe = document.getElementById('pixelD');
	availHe.innerHTML = screen.pixelDepth;
}
if (window.screen.width != null){
	var availHe = document.getElementById('widt');
	availHe.innerHTML = screen.width;
}
