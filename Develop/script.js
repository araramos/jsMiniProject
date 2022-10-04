// Assignment code here
//create regx regular expression crceates a set of rules that you can cross reference
//promtp save input render debatable try again
// Password
 // Grab DOM elements to reference later
 alert("disconnected");
 const validation_errors = document.getElementById('validation_errors')
 const password_input = document.getElementById('password_field')
 
 // Password

 // Define RegEx's
 const checkForNum = /\d/
 const checkForCapitalLetter = /[A-Z]/
 const checkForSpecialCharacter = /[`!@#$%^*()_+\.=\[\]{};':"\\|.,<>\/?~']/

 // Empty containers to hold the values of the RegEx tests
 let hasNum, 
     hasCapitalLetter, 
     hasSpecialCharacter, 
     hasLength

 const generateSecurePassword = () => {
     // A string of all valid characters in a password
     const chars = "0123456789abcdefghijklmnopqrstuvwxyz`!@#$%^*()_+.=[]{};':\"|.,<>/?~'ABCDEFGHIJKLMNOPQRSTUVWXYZ"
     // Generate a random password length
     const passwordLength = Math.ceil((Math.random() * 120) + 8)
     // Empty string for password to start
     let passwordContainer = ''

     // Generate a random password that is passwordLength long by generating a random number, and then grabbing that random character from the acceptable characters string above
     for (let i = 0; i <= passwordLength; i++) {
         let randomNumber = Math.floor(Math.random() * chars.length);
         passwordContainer += chars.substring(randomNumber, randomNumber +1);
         }
     
     // set the password value to the randomly generated password
     password_input.value = passwordContainer
     // clear any errors there may have been
     validation_errors.innerHTML = ''
 }

 const validatePassword = (minLength = 8, maxLength = 128) => {
     // grab the password
     let password = password_input.value

     // Run our RegEx tests to test security of the password
     hasNum = checkForNum.test(password)            
     hasCapitalLetter = checkForCapitalLetter.test(password)
     hasSpecialCharacter = checkForSpecialCharacter.test(password)

     hasLength = password.length >= minLength && password.length <= maxLength

     // Generate the errors to display on screen
     generateValidationErrors()
 }

 const generateValidationErrors = () => {
     // An empty container to hold the errors while we do our checks
     const errors = []

     // Check to see if these values are true or false. If false (aka they fail) add the error to the errors array
     if (!hasNum) errors.push('<li>Must contain number</li>')
     if (!hasCapitalLetter) errors.push('<li>Must contain a capital letter</li>')
     if (!hasSpecialCharacter) errors.push('<li>Must contain special characters</li>')
     if (!hasLength) errors.push('<li>Between 8-128</li>')
     if (hasNum && hasCapitalLetter && hasSpecialCharacter && hasLength) errors.push('<li>Congratulatopms! Your password is secure!</li>')
     // Turn the validation errors into a string, and add them to the DOM
     validation_errors.innerHTML = errors.join('')
 }
 const clearPassword = () => {
     // set the password input to an empty string
     password_input.value = ''
 }

 const copyPassword = () => {
     // Select the text field
     password_input.select();

     // Copy the text inside the text field to the naviagtor clipboard
     navigator.clipboard.writeText(password_input.value);

     // Alert the copied te1xt
     alert("Password copied!");
 }
 