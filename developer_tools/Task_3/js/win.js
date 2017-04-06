function openwin() {
	
if (document.getElementById('width').value != 0 && document.getElementById('height').value != 0){
	
var w=document.getElementById('width').value;
	
var h=document.getElementById('height').value;
	
var openwin = window.open("about:blank", "hello", "width=w,height=h");
openwin.document.body.innerHTML = "<div id='scrollbar' style='left: 0; top: 0;'></div>"; 	
openwin.resizeTo(w,h);
	
}
else {		
	alert ('введите значения');
};
openwin.onbeforeunload = function()         
{
             return "Закрыть окно?";         
};

openwin.document.getElementById('scrollbar').innerHTML = 'Высота: ' + openwin.screen.height + '<br>Ширина: ' + openwin.screen.width;

}





