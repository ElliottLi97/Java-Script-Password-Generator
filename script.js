// Assignment Code
var generateBtn = document.querySelector("#generate");

//Character Arrays
const lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const number = ['1','2','3','4','5','6','7','8','9','0']
const specialchars = ['!','@','#','$','%','^','&','*','(',')',]
var potentialpasswordcharacters = []
var passwordplacehold = ""
var passwordlength = ""
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  passwordplacehold = ""
  numberask()
  characteradd()
  randomChoiceloop()
  return passwordplacehold
}

function randomChoiceloop () { 
  for( i=0; i< passwordlength; i++){
    const randomIndex = Math.floor(Math.random() * potentialpasswordcharacters.length)
    passwordplacehold += potentialpasswordcharacters[randomIndex]
  }
} // RNG for potential PW character array. Loops until the desired password length. Randommly chooses a character from the potential character index. 

function numberask() {
  passwordlength = prompt("How long would you like your password?\r\nEnter a number from 8-128.")
  checknumber()
}

function checknumber(){ //Checks user inputs for password length to ensure that they input a number between 8 and 128
  if (!parseInt(passwordlength)){
    alert("Please enter a number")
    numberask()
  }else if(passwordlength < 8 || passwordlength > 128){
    alert("Please enter a number from 8-128")
    numberask()
  }else{
    console.log("This is an integer")
  }
}

function characteradd() { //asks uder which sets of characters they want in their PW
  potentialpasswordcharacters = []
  if (confirm("Would you like lower case letters?")){potentialpasswordcharacters = potentialpasswordcharacters.concat(lowercase)
    console.log(potentialpasswordcharacters)}
  if (confirm("Would you like upper case letters?")){potentialpasswordcharacters = potentialpasswordcharacters.concat(uppercase)
    console.log(potentialpasswordcharacters)}
  if (confirm("Would you like numbers?")){potentialpasswordcharacters = potentialpasswordcharacters.concat(number)
    console.log(potentialpasswordcharacters)}
  if (confirm("Would you like special characters?")){potentialpasswordcharacters = potentialpasswordcharacters.concat(specialchars)
    console.log(potentialpasswordcharacters)}
  if (potentialpasswordcharacters.length == 0){
    alert("Please choose at least one set of characters")
    characteradd()
  }
}