var re = /(\w+)\s(\w+)/;
var str = "Titi toto";
var newstr = str.replace(re, "$2, $1");
console.log(newstr);