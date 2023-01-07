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


const minPassword = 10;
const maxPassword = 64;
let pwdLength = 0;
let pwdOptions = [];
let specialChars = false;
let numericalChars = false;
let lowerChars = false;
let upperChars = false;



// Function to prompt user for password options
function getPasswordOptions() {
  // moving pwdOptions array into this function to clear it on new password generation
  pwdOptions = [];
  // Prompting for person to enter in number of characters for password
  do {
    pwdLength = prompt("Please enter a password length between " + minPassword + " & " + maxPassword + " characters");
    // Testing pwdLength value
    // alert(pwdLength);
  }
  // Testing output if both number and special char added to prompt
  // alert(isNaN(pwdLength))
  // Using while loop whilst below conditions are true. Ensures person is continuously prompted until they enter a number between 10 & 64
  while (pwdLength !== null && (isNaN(pwdLength) === true || pwdLength < minPassword || pwdLength > maxPassword ));
  
  // Adding alert and ending function in case user clicks cancel on prompt
  if (pwdLength === null) {
    alert("Thank you for looking at the password generator. Goodbye!");
    return;
  }
  
  // getting employee to confirm password character options. continues to loop asking questions until at least 1 is picked
  do {
    specialChars = confirm("Would you like to include special characters in your password?");
    // Testing output
    // alert(specialChars);
    numericalChars = confirm("Would you like to include numerical characters in your password?");
    lowerChars = confirm("Would you like to include lowercase characters in your password?");
    upperChars = confirm("Would you like to include uppercase characters in your password?");
  }
  // Using while loop whilst below conditions are false to ensure the employee at least selects one of the options
  while (specialChars === false && numericalChars === false && lowerChars === false && upperChars === false);

  // function to concatinate existing arrays into pwdOptions array if the employee has selected it as an option
  function addArr(arr) {
    pwdOptions = pwdOptions.concat(arr);
    return pwdOptions;
  }

  if (specialChars) {
    addArr(specialCharacters);
  }
  if (numericalChars) {
    addArr(numericCharacters);
  }
  if (lowerChars) {
    addArr(lowerCasedCharacters);
  }
  if (upperChars) {
   addArr(upperCasedCharacters);
  }

  // Testing output
  // console.log(pwdOptions);
  return pwdOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();

  // Initialising variable
  let password = "";

  // looping through calling getRandom function based on length entered by employee
  for (i = 0; i < pwdLength; i++) {
    let pwdCharOptions = getRandom(pwdOptions);
    password = password.concat(getRandom(pwdCharOptions));
  }
  return password;
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