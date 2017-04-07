window.onload = function () {
    var browserservice = document.getElementById('browser');

    if (window.navigator.userAgent.search(/Chrome/) != -1) {
        browserservice.innerHTML = '<p>' + navigator.userAgent + '</p>' + '<br><b>' + navigator.appVersion + '</b>';
    }
    else if (window.navigator.userAgent.search(/Firefox/) != -1) {
        browserservice.innerHTML = '<p>' + navigator.appName + '</p>' + '<br><b>' + navigator.cookieEnabled + '</b>';
    }
    else if (window.navigator.userAgent.search(/Opera/) != -1) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Географическое положение не поддерживается";
        }
        function showPosition(position) {
            x.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
        }
    };
}