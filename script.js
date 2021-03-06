// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
//Array of special characters for password creation
var lowerCaseArray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
var upperCaseArray = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharactersArray = [
  ',',
  '.',
  '/',
  '<',
  '>',
  '?',
  "'",
  ':',
  ';',
  '[',
  ']',
  '{',
  '}',
  '|',
  '=',
  '+',
  '-',
  '_',
  ')',
  '(',
  '*',
  '&',
  '^',
  '%',
  '#',
  '@',
  '!',
  '~',
  '`'
];

var userSelect = [];
var passLength = "";
var generateBtn = "";


// Prompts for password criteria
var confirmLength = (prompt("How many characters would you like your password to contain?"));

// If answer is outside the parameters 
  while(confirmLength  < 8 || confirmLength > 128) {
    alert("Password length must be between 8-128 characters Try again");
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
    } 

// Repeat back how many charactes the user will have  
    alert(`Your password will have ${confirmLength} characters`);
    
// Confirm whether or not to use lowercase, uppercase, numeric and/or special characters

//lower case letters
var confirmLowercase = window.confirm("Click OK to confirm to include lowercase characters."); 
console.log(confirmLowercase);
var selectedCharacters = "";

if (confirmLowercase) {
var lowerCaseArray = '';
selectedCharacters += lowerCase;
alert("Your password will contain lowercase letters.");
}
else {
var lowerCase = ""
alert("Your password will not contain lowercase letters.");
};

//uppercase letters 
var confirmUppercase = window.confirm("Click OK to confirm to include uppercase characters."); 
console.log(confirmUppercase);

if (confirmUppercase === true) {
var upperCaseArray = ''; 
selectedCharacters += upperCase;
alert("Your password will contain uppercase letters.");
}
else {
var upperCase = ""
alert("Your password will not contain uppercase letters.");
};

// numeric
var confirmNumbers = window.confirm("Click OK to confirm to include numeric characters."); 
console.log(confirmNumbers);

if (confirmNumbers) {
var numbersArray = '';
selectedCharacters += numbers;
alert("Your password will contain numbers.");
}
else {
var numbers = ""
alert("Your password will not contain numbers.");
};

// special characters
var confirmSpecialCharacters = window.confirm("Click OK to confirm to include special characters."); 
console.log(confirmSpecialCharacters);

if (confirmSpecialCharacters) {
var specialCharactersArray = '';
selectedCharacters += specialCharacters;
alert("Your password will contain special characters.");
}
else {
var specialCharacters = ""
alert("Your password will not contain special characters.");
};
 
// selection of random varibles
if (userSelect.length === 0) {
  alert("Please try again and select at least one character type!");
  generatePassword();
} 
else {
  var userSelect = [lowerCaseArray, upperCaseArray, numbersArray, specialCharactersArray];
  console.log("user select: ", userSelect);
}

  var generatePassword = "";
  console.log(selectedCharacters);

for (i = 0; i < passLength; i++) {password += userSelect[Math.floor(Math.random() * userSelect.length)];
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}