var userChoice = prompt("Do you choose rock, paper or scissors?");
console.log("You chose " + userChoice + "!");

var computerChoice = Math.random();

if (computerChoice <= 0.33){
	computerChoice = "scissors";   
}
else if ((computerChoice > 0.33) || (computerChoice <= 0.66)) {
	computerChoice = "paper";
}
else {
	computerChoice = "rock";
}

console.log("The computer chose " + computerChoice + "!");

var compare = function(choice1, choice2) {
	if (choice1 === choice2)   {
		return "The result is a tie!";   
		
	}
	else if (choice1 === "rock") {
		if (choice2 === "scissors") {
			return "rock wins, you won!";   
			
		}
		else {
			return "paper wins, the computer won.";   
		}
	}
	else if (choice1 === "paper") {
		if (choice2 === "rock") {
			return "paper wins, you won!";   
		}
		else {
			return "scissors wins, the computer won.";   
		}
		
	}
	else if (choice1 === "scissors") {
		if (choice2 === "rock") {
			return "rock wins, you won!";   
		}
		else {
			return "paper wins, the computer won.";   
		}  
	}
	
}

console.log(compare(userChoice, computerChoice));