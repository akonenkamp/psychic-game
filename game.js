

var userGuess = 5; //highest number user can guess 
var counter = 0;
var maxTries = 5;

// generate random number and store it for later 

randomNumber = Math.floor((Math.random() * userGuess) + 1);


//prompt user to guess number between 1 and X 
while (userAttempts !== randomNumber) {
	var userAttempts = prompt("pick a number between one and " + userGuess);
	counter += 1 ;

	if (counter > maxTries) {
		document.write("you have no more tries left;");

		break;
	} 

	if (userAttempts == randomNumber ) {
		document.write("you win, the correct number was " + randomNumber);
		break;
	}

}