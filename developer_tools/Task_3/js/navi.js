window.onload = function() {
var browserservice = document.getElementById('browser');

if (window.navigator.userAgent.search(/Chrome/) != -1) {
	browserservice.innerHTML = '<p>' + navigator.userAgent + '</p>'+ '<br><b>' + navigator.appVersion + '</b>';
}
else if (window.navigator.userAgent.search(/Firefox/) != -1) {
	browserservice.innerHTML = '<p>' + navigator.appName + '</p>'+ '<br><b>' + navigator.cookieEnabled + '</b>';
}



else if (window.navigator.userAgent.search(/IE/) != -1) {

browserservice.innerHTML = '<p>' + navigator.platform + '</p>';
	
var lat = position.coords.latitude;
	
var lon = position.coords.longitude;
	
browserservice.innerHTML += lat + '<br>' + lon; 
};