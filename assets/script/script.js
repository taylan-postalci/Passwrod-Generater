// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  var upperCase = false
  var lowerCase = false
  var specialChar = false
  var questionNotDone = true;

  var pwlength =
    prompt("Please specify the length in which you want your password to be \n You may choose any length between 8 and 128");


  while (pwlength < 8 || pwlength > 128) {
    pwlength = prompt("please enter an interger between 8 and 128");


  }

  while (questionNotDone) {
    var input = prompt("Do you want your password to include upper case letters \n Type Y for yes and N for no")
    while (input.toUpperCase().compareTo("Y") !== 0 && input.toUpperCase().compareTo("N") !== 0) {
      alert("Please input a Y or N!");
      input = prompt("Do you want your password to include upper case characters? \n Type Y for yes and N for no")
    }
    if (input.toUpperCase().compareTo("Y") == 0) {
      upperCase = true;
    }
    else
      upperCase = false;



    var input2 = prompt("Do you want your password to include lower case letters \n Type Y for yes and N for no")
    while (input2.toUpperCase().compareTo("Y") != 0 && input2.toUpperCase().compareTo("N") != 0) {
      alert("Please input a Y or N!");
      input2 = prompt("Do you want your password to include lower case characters? \n Type Y for yes and N for no")
    }
    if (input2.toUpperCase().compareTo("Y") == 0) {
      lowerCase = true;
    }
    else
      lowerCase = false;



    var input3 = prompt("Do you want your password to include special characters? \n Type Y for yes and N for no")


    while (input3.toUpperCase().compareTo("Y") != 0 && input3.toUpperCase().compareTo("N") != 0) {
      alert("Please input a Y or N!");
      input3 = prompt("Do you want your password to include special characters? \n Type Y for yes and N for no")
    }
    if (input3.toUpperCase().compareTo("Y") == 0) {
      specialChar = true;
    }
    else
      specialChar = false;


    if (lowerCase || upperCase || specialChar){

    questionNotDone = false;
    }



  }
  alert("YAY");
}




console.log(parseInt(pwlength));




function generatePassword() {
  console.log("somebullshit")

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
