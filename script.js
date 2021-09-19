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

var confirmLowercase = confirm("Include lowercase letters?")
var confirmUppercase = confirm("Include uppercase letters?")
var confirmNumbers = confirm("Include numbers?")
var confirmSpecial = confirm("Include special characters?")

  for (i = 0; i = passwordLength; i++) {
    if (confirmLowercase) {
      password += lowercase[Math.floor(Math.random() * passwordLength)];
    }
    if (confirmUppercase) {
      password += uppercase[Math.floor(Math.random() * passwordLength)];
    }
    if (confirmNumbers) {
      password += numbers[Math.floor(Math.random() * passwordLength)];
    }
    if (confirmSpecial) {
      password += special[Math.floor(Math.random() * passwordLength)];
    }
    else {
      alert("This function is not available at this time.")
    }
    return password;
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
