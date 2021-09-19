// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// create variables
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&*_-+=";



// create a function for 8 characters
function charactercount(){
  window.confirm("By utilizing this site, a password will be generated for you between 8 and 128 characters. Please answer the following prompts for password customization.");
}

// create a function to include lowercase


// create a function to include uppercase 


// create a  function to include numeric 


// create a function to include special characters


//generate password
function generatePassword()


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//execute character function
charactercount();
generatePassword;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
