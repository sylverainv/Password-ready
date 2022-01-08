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
// Write password to the #password input


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
