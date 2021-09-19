// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// create variables
var character;


// create a function for 8 characters
function characters(){
  var character = window.confirm("Include at least 8 characters (but not more than 128)?");
}

// create a function to include lowercase


// create a function to include uppercase 


// create a  function to include numeric 


// create a function to include special characters


//generate password


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//execute character function
characters()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
