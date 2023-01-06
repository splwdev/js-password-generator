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
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let pwdSettings = {
  specialChars: specialCharacters,
  numericalChars: numericCharacters,
  lowerChars: lowerCasedCharacters,
  upperChars: upperCasedCharacters,
  minPassword: 10,
  maxPassword: 64
}

let pwdLength = 0;


// Function to prompt user for password options
function getPasswordOptions() {
  // Prompting for person to enter in number of characters for password
  pwdLength = prompt("Please enter a password length between " + pwdSettings.minPassword + " & " + pwdSettings.maxPassword + " characters");
  
  // Undertaking while loop until person enters between 10 & 64 chars
  while (pwdLength < 10 || pwdLength > 64) {
    alert("Password length must be between " + pwdSettings.minPassword + " & " + pwdSettings.maxPassword);
    pwdLength = prompt("Please enter a password length between " + pwdSettings.minPassword + " & " + pwdSettings.maxPassword + " characters");
  }

  // getting person to confirm password character options
  let special = confirm("Would you like to include special characters in your password?");
  let numerical = confirm("Would you like to include numerical characters in your password?");
  let lowerCase = confirm("Would you like to include lowercase characters in your password?");
  let upperCase = confirm("Would you like to include uppercase characters in your password?");

}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);