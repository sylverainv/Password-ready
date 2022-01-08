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

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Prompts for password criteria
var confirmLength = (prompt("How many characters would you like your password to contain?"));

// If answer is outside the parameters 
  while(confirmLength  < 8 || confirmLength > 128) {
    alert("Password length must be between 8-50 characters Try again");
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
    } 

// Repeat back how many charactes the user will have  
    alert(`Your password will have ${confirmLength} characters`);
    
// Confirm whether or not to use lowercase, uppercase, numeric and/or special characters
var confirmLowercase = window.confirm("Click OK to confirm including lowercase characters."); 
console.log(confirmLowercase);

var selectedCharacters = "";


if (confirmLowercase) {
var lowerCaseArray = '';
selectedCharacters += lowercase;
alert("Your password will contain lowercase letters.");
}
else {
var lowerCaseArray = ""
alert("Your password will not contain lowercase letters.");
};

//uppercase letters 
var confirmUppercase = window.confirm("Click OK to confirm including uppercase characters."); 
console.log(confirmUppercase);

if (confirmUppercase === true) {
var upperCaseArray = ''; 
selectedCharacters += uppercase;
alert("Your password will contain uppercase letters.");
}
else {
var upperCaseArray = ""
alert("Your password will not contain uppercase letters.");
};

// numeric
var confirmNumbers = window.confirm("Click OK to confirm including numeric characters."); 
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
var confirmSpecialCharacters = window.confirm("Click OK to confirm including special characters."); 
console.log(confirmSpecialCharacters);

if (confirmSpecialCharacters) {
var specialCharactersArray = '';
selectedCharacters += characters;
alert("Your password will contain special characters.");
}
else {
var confirmSpecialCharacters = ""
alert("Your password will not contain special characters.");
};



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
