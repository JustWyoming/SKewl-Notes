//variable style functions
//industry leaning towards this style

var greeting = function () {
	console.log("Hi Jerks!");
}
greeting();

// in javascript functions you have to be specific and call the function, 
// or you return nothing or you return an empty function name
// you can call the function as many times as you like.

// to pass a variable through the function to a parameter you can do it like this:
var name = "Esmerelda"
var greeting = function (taco) {
	console.log("Hi Jerks!" + " Hi " + taco);
}
greeting("Sanchez");
// greeting is the parameter and sanchez is the argument you're passing into it. 
// if you want to you can call the variable too
greeting(name);

// you can have multiple placeholders in your defintion of your function ex: function (taco, burrito);
var name = "Esmerelda";
var greeting = function (taco, burrito) {
	console.log("Hi Jerks!" + name + " " + burrito);
}
greeting();
greeting("Sanchez");
greeting(name);
greeting("Mary Poppins");
// parameters of a function are local to the function, and cannot be called out of the function, because they are undefined
// a useable version of this is:

var name = "Esmerelda";
var greeting = function (taco, burrito) {
	return ("Hello" + name + " " + burrito);
}
console.log(greeting(name, " Sanchez"));	