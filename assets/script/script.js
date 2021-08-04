// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var pwlength =
    prompt("Please specify the length in which you want your password to be \n You may choose any length between 8 and 128");


  while (isNaN(parseInt(pwlength)) || (parseInt(pwlength) < 8 || parseInt(pwlength) > 128)) {
    pwlength = prompt("please enter an interger between 8 and 128");


  }

  var upperCase = false
  var lowerCase = false
  var specialChar = false


  var input = prompt("Do you want your password to include uppercase letters \n Type Y for yes and N for no")
  if (input.toUpperCase() == "Y") {
    upperCase = true
  }
  var input = prompt("Do you want your password to include lowercase letters \n Type Y for yes and N for no")
  if (input.toUpperCase() == "Y") {
    lowerCase = true
  }
  var input= prompt("Do you want your password to include special characters? \n Type Y for yes and N for no")
  if (input.toUpperCase() == "Y") {
    specialChar = true
  }
  while (upperCase == false && lowerCase == false && specialChar == false) {
    alert("Please select atleast one option to strengthen your password!")
    var input = prompt("Do you want your password to include uppercase letters \n Type Y for yes and N for no")
    if (input.toUpperCase() == "Y") {
      upperCase = true
    }
    var input = prompt("Do you want your password to include lowercase letters \n Type Y for yes and N for no")
    if (input.toUpperCase() == "Y") {
      lowerCase = true
    }
    var input = prompt("Do you want your password to include special characters? \n Type Y for yes and N for no")
    if (input.toUpperCase() == "Y") {
      specialChar = true
    }


  }

  console.log(parseInt(pwlength));


}
function generatePassword() {
  console.log("somebullshit")

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
