// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var lower = "abcdefghijklmnopqrstuvwxyz"
  var upper = lower.toUpperCase();
  var special = "!@#$%^&*_-+=";
  var vals = "";
  var final = "";


  var upperCase = false;
  var lowerCase = false;
  var specialChar = false;
  var questionNotDone = true;

  var pwlength =
    prompt("Please specify the length in which you want your password to be \n You may choose any length between 8 and 128");


  while (pwlength < 8 || pwlength > 128) {
    pwlength = prompt("please enter an interger between 8 and 128");


  }

  while (questionNotDone) {
    var input = prompt("Do you want your password to include upper case letters \n Type Y for yes and N for no")
    while (input.toUpperCase() !== "N" && input.toUpperCase() !== "Y") {
      alert("Please input a Y or N!");
      input = prompt("Do you want your password to include upper case characters? \n Type Y for yes and N for no")
    }
    if (input.toUpperCase() == "Y") {
      upperCase = true;
    }
    else
      upperCase = false;



    var input2 = prompt("Do you want your password to include lower case letters \n Type Y for yes and N for no")
    while (input2.toUpperCase() !== "Y" && input2.toUpperCase() !== "N") {
      alert("Please input a Y or N!");
      input2 = prompt("Do you want your password to include lower case characters? \n Type Y for yes and N for no")
    }
    if (input2.toUpperCase() == "Y") {
      lowerCase = true;
    }
    else
      lowerCase = false;



    var input3 = prompt("Do you want your password to include special characters? \n Type Y for yes and N for no");


    while (input3.toUpperCase() !== "Y" && input3.toUpperCase() !== "N") {
      alert("Please input a Y or N!");
      input3 = prompt("Do you want your password to include special characters? \n Type Y for yes and N for no");
    }
    if (input3.toUpperCase() === "Y") {
      specialChar = true;
    }
    else
      specialChar = false;


    if (lowerCase || upperCase || specialChar) {

      questionNotDone = false;
      

    }
    else {
      alert("Please select atleast one of the given choices")
    }

  }
  
  if (upperCase){
    vals += upper;  
    }
    if (lowerCase){
      vals += lower;  
      }
      if (specialChar){
        vals += special;  
        }

      for(var i=0;i<pwlength;i++)
      {
        final+=vals.charAt(parseInt(Math.random()*vals.length));
      }
      document.getElementById("password").value = final;
    console.log(final);
    

  
}



// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword)
