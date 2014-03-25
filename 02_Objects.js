function createPerson(name, gender){
	var localperson = new Object();
	localperson.name = name;
	localperson.age = 21;
	localperson.gender = gender;
	return "You created a " + localperson.gender + ". Aged " + localperson.age + ", called " + localperson.name;

}

console.log(createPerson("Fred", "Male"));
var inputname = stdio.resume();
console.log("It's alive!");