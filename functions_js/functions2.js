// var add = function(num1, num2) {
// 	console.log(num1 + num2)
// }
// add(2,7)
// // console is like a print, it's not a return to a function.
// // a return is the effect of having a cupboard for your dishes after you wash them in the dishwasher (the function)
var add = function(num1, num2) {
	console.log(num1 + num2) // this is not affecting the return or the function
	return (num1 + num2)
}
var result = add(4, 6)
// console.log("print the results of our return here", result);
// if you don't have a return you can't use the information stored in any output

// create an exponent function

var power = function (x, y) {
	return (Math.pow(x, y));
}
var result = power(6, 3);
console.log(result);

// multiple functions 
var makeWordBigger = function(thing) {
	return thing.toUpperCase();
}
 
var reverseWord = function(word){
	return word.split('').reverse().join('');
}
 
var isLongLength = function(thing) {
	// if (thing.length > 3) {
	// 	return true
	// }
 
	return (thing.length > 3)
}
 
var names = ["anil", "lenny", "sarah"]
 
for (var i = 0; i < names.length; i++) {
	console.log(reverseWord(makeWordBigger(names[i])));
}