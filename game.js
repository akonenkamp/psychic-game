

var userGuess = 100; //highest number user can guess 
var counter = 0;
var maxTries = 3;

// generate random number and store it for later 

var randomNumber = Math.floor(Math.random() * userGuess) + 1;
//prompt user to guess number between 1 and X 

while (userAttempts !== randomNumber) {
	var userAttempts = prompt("pick a number between one and " + userGuess);
	counter += 1 ;

	if (counter > maxTries) {
		alert("you have no more tries left;");

		break;
	} 

}