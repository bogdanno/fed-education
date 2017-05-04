document.write('1.Треугольник');
 //треугольник
 for(var i = 0; i < 8; i++) {
    for(var j = 0; j < i; j++) {
            document.write('#');
    }
    document.write('<br/>');
}
document.write('<br/>');
document.write('<br/>');
document.write('2.Шахматная доска<br/>');
//шахматная доска
var c = '';
var a = 9;
var b = 9;
for (var i=0; i<a; i++) {
	for (var j=0; j<b; j++) {
		if ((i+j)%2 == 0) {
			c = c + '#';
		}
		else {c = c + '_'};
	}
	c = c + '<br/>';
}
document.write(c);

document.write('<br/>');
document.write('<br/>');
document.write('3.Минимум<br/>');
//минимум
function min(first,second) {
	if (first>second) {
		return second;
	}
	else { 
		return first;
	}
}
document.write(min(23,45));
// document.write(min(88,1));
// document.write(min(4,62));
// document.write(min('hi','buy'));
// document.write(min('hi','3'));
// document.write(min(5,'hi'));

document.write('<br/>');
document.write('<br/>');
document.write('11.Свертка<br/>');
//свертка
var arrays = [[1, 2, 3], [4, 5], [6]].reduce(function(a, b) {
	return a.concat(b);
});
document.write(arrays);




