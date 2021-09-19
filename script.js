// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// generate password
function generatePassword() {

var password = "";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&*_-+=";
var passwordLength = prompt("Choose a password length between 8 and 128 characters", "12");
    passwordLength = parseInt(passwordLength);
    console.log(passwordLength);
    
if {
  var confirmLowercase = window.confirm("Include lowercase letters?")
  var confirmUppercase = window.confirm("Include uppercase letters?")
  var confirmNumbers = window.confirm("Include numbers?")
  var confirmSpecial = window.confirm("Include special characters?")
}

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
