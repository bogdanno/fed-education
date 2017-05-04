document.write("<br/>");
document.write("<br/>");
document.write('17.Кавычки в тексте<br/>');
//17 задание
var stringDialog = 'Woman: \'So, what\'s your usual day like? You always seem so busy.\'  Man: \'Well, I usually get up around 5:00 a.m. and work on the computer until 6:00 a.m.\' Woman: \'Why do you get up so early?\'  Man: \'Well, I have to leave home at twenty to seven (6:40 a.m.) so I can catch a bus at 7:00 o\'clock . It takes me about twenty minutes to walk to the bus stop from my house.\'  Woman: \'And what time do you get to work?\'  Man: \'Uh, my bus takes about an hour to get there, but it stops right in front of my office.\' Woman: \'That\'s nice. And what time do you get off work?\'';

document.write(stringDialog.replace(/(\W\')|(\W\')\B/g,"\""));

document.write("<br/>");
document.write("<br/>");

//16 задание 
verify(/ca[tr]/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/(pop)|(\sprops)/,
       ["pop culture", "mad props"],
       ["plop"]);

verify(/ferr(et|y|ari)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/\wious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s[.,:;]/,
       ["bad punctuation ."],
       ["escape the dot"]);

verify(/[a-z]{7,}\b/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

verify(/\b[a-df-z]+\b/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);

function verify(regexp, yes, no) {
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log("Не нашлось '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("Неожиданное вхождение '" + s + "'");
  });
}

//18. Снова числа 
var number = /(^[0-9]*$)|(^\-[0-9]*$)|(^\+[0-9]*$)|(^[0-9][0-9]*\.[0-9][0-9]*$)|(^\.[0-9][0-9]*$)|(^[0-9][0-9]*\.$)|(^[0-9][0-9]*\.[0-9][e][0-9]$)|(^[0-9][A-F]\-[0-9]$)|(^[0-9][e][\+\-][0-9][0-9]*$)/;
["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
 "1e+12"].forEach(function(s) {
  if (!number.test(s))
    console.log("Не нашла '" + s + "'");
});
["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
 "."].forEach(function(s) {
  if (number.test(s))
    console.log("Неправильно принято '" + s + "'");
});
