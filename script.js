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
function confirmLowercase(){
  window.confirm("Include lowercase characters?")
}

// create a function to include uppercase 
function confirmUppercase(){
  window.confirm("Include uppercase characters?")
}

// create a  function to include numeric 
function confirmNumbers(){
  window.confirm("Include numbers?")
}

// create a function to include special characters
function confirmSpecial(){
  window.confirm("Include special characters?")
}

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

confirmLowercase();

confirmUppercase();

confirmNumbers();

confirmSpecial();

generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
