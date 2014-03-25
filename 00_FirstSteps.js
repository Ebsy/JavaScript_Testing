//this is a comment
//not using semicolons because the GitHub style guide says not to!


var printThis = "Here is a string."

var testArray = [1,5,55,1000]

console.log(printThis)
//alert(printThis)

//var userInput = prompt("Please Enter your name...")
//console.log("Your name is " + userInput)

function Testfunction(input) {
	return input * 100
}

console.log("\nAnd now a test function!...")
console.log(Testfunction(10))

console.log("\nAnd now something from an array!...")
console.log(testArray[1])
console.log("testArray[0] which is \"" + testArray[0] + "\" is of the type: " + typeof(testArray[0]))
console.log("but printThis is obviously a " + typeof(printThis))