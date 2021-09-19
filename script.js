// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// create variables
var password = ""
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&*_-+=";

// create a function for 8 characters
function charactercount(){
  window.alert("By utilizing this site, a password will be generated for you between 8 and 128 characters. Please answer the following prompts for password customization.");
}

// create a function to include lowercase
function lowercaseQuestion(){
 var confirmlowercase = window.confirm("Include lowercase characters?");
}

// create a function to include uppercase 
function uppercaseQuestion(){
  var confirmuppercase = window.confirm("Include uppercase characters?");
}

// create a  function to include numeric 
function numbersQuestion(){
  var confirmnumbers = window.confirm("Include numbers?");
}

// create a function to include special characters
function specialQuestion(){
  var confirmspecial = window.confirm("Include special characters?");
}

//generate password function
function generatePassword() {

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//execute functions in order
charactercount();

lowercaseQuestion();

uppercaseQuestion();

numbersQuestion();

specialQuestion();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
