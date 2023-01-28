const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

// How long should the password be?
let howLong = document.querySelector("#password-length").value;

// Store each character in an array
let randomChars = [];

// Generate a password
function generatePassword() {
    for (i = 0; i < howLong; i++) {
        // Generate a random number
        const randomChar = Math.floor(Math.random() * characters.length)

        // Add character to the array
        randomChars.push(characters[randomChar])

        // Join characters
        password = randomChars.join("")
    }

    // Enable the slider
    enableLengthSlider();

    // Reset the array
    randomChars = [];

    // Return password
    return password;
}

// Copy password to clipboard
function copyPassword() {
    // Get the text field
    const copyText = document.querySelector("#display-password");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
};

// Display password
function displayPassword() {
    const displayPassword = document.querySelector("#display-password")
    displayPassword.value = generatePassword();
}

// Enable length slider
function enableLengthSlider() {
    const slider = document.querySelector("#password-length")
    slider.disabled = false;
}

// Generate new password when slider is changed
function changeLength() {
    const passwordLengthInput = document.querySelector("#password-length");
    const passwordLengthLabel = document.querySelector("h3");

    passwordLengthInput.addEventListener("input", function () {
        const currentLength = passwordLengthInput.value;
        passwordLengthLabel.textContent = "Password length (" + currentLength + ")";
    });

    const slider = document.querySelector("#password-length")
    howLong = slider.value;
    displayPassword();
}


