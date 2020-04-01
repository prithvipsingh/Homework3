// Assignment Code.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Creating the Function which check the lenth of password (chosen by users).
function checkPasswordLenthInput(input) {
  if (typeof input === "number" && input > 7 && input < 129) {
    return true;
  }
  else {
    return false;
  }
}
function generatePassword() {
  do {
    var passwordSize = parseInt(prompt("Choose a length of password at least 8 characters and no more than 128 characters"));
  } while (!checkPasswordLenthInput(passwordSize));

  // Created confirm functions which tell users the password selection creatria.
  var numbers = confirm("Please choose  numbers in password");
  var specialChar = confirm("Please choose special character in password");
  var lowerCase = confirm("Please choose lowercase  letter in password");
  var upperCase = confirm("Please choose uppercase letter in password");
 // Array variables holds the password value.
  var passwordArray = [];
  var password = "";
 // 
  if (numbers) {
    passwordArray.push(...numericCharacters);
  }
  if (specialChar) {
    passwordArray.push(...specialCharacters);
  }
  if (lowerCase) {
    passwordArray.push(...lowerCasedCharacters);
  }
  if (upperCase) {
    passwordArray.push(...upperCasedCharacters);
  }
  for (var i = 0; i < passwordSize; i++) {
    var random = Math.floor(Math.random() * passwordArray.length);
    password = password + passwordArray[random];

  }
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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
  'V'
];

