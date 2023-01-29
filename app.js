const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const characters = [...numbers, ...symbols, ...uppercase, ...lowercase];

// If numbers checkbox is unchecked, remove numbers from characters array
function removeNumbers() {
    const numbersCheckbox = document.querySelector("#numbers");
    if (numbersCheckbox.checked === false) {
        for (i = 0; i < numbers.length; i++) {
            characters.splice(characters.indexOf(numbers[i]), 1);
        }
    } else {
        for (i = 0; i < numbers.length; i++) {
            characters.push(numbers[i]);
        }
    }

    displayPassword();
}

// If symbols checkbox is unchecked, remove symbols from characters array
function removeSymbols() {
    const symbolsCheckbox = document.querySelector("#symbols");
    if (symbolsCheckbox.checked === false) {
        for (i = 0; i < symbols.length; i++) {
            characters.splice(characters.indexOf(symbols[i]), 1);
        }
    } else {
        for (i = 0; i < symbols.length; i++) {
            characters.push(symbols[i]);
        }
    }
    displayPassword();
}

// If uppercase checkbox is unchecked, remove uppercase from characters array
function removeUppercase() {
    const uppercaseCheckbox = document.querySelector("#uppercase");
    if (uppercaseCheckbox.checked === false) {
        for (i = 0; i < uppercase.length; i++) {
            characters.splice(characters.indexOf(uppercase[i]), 1);
        }
    } else {
        for (i = 0; i < uppercase.length; i++) {
            characters.push(uppercase[i]);
        }
    }

    displayPassword();
}

// If lowercase checkbox is unchecked, remove lowercase from characters array
function removeLowercase() {
    const lowercaseCheckbox = document.querySelector("#lowercase");
    if (lowercaseCheckbox.checked === false) {
        for (i = 0; i < lowercase.length; i++) {
            characters.splice(characters.indexOf(lowercase[i]), 1);
        }
    } else {
        for (i = 0; i < lowercase.length; i++) {
            characters.push(lowercase[i]);
        }
    }

    displayPassword();
}

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

    // Enable the copy button
    enableCopyButton();

    // Enable the options
    enableCheckboxes();

    // Reset the array
    randomChars = [];

    // Return password
    return password;
}

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
    const passwordLengthLabel = document.querySelector(".slidecontainer label");

    passwordLengthInput.addEventListener("input", function () {
        const currentLength = passwordLengthInput.value;
        passwordLengthLabel.textContent = "Password length (" + currentLength + ")";
    });

    const slider = document.querySelector("#password-length")
    howLong = slider.value;
    displayPassword();
}

// Enabled copy button
function enableCopyButton() {
    const copyButton = document.querySelector("#copy-button");
    copyButton.disabled = false;
}

// Display Copied! text remove hidden class. Remove class after 1 second
function displayCopied() {
    const copied = document.querySelector("#copied-text");
    copied.classList.remove("hidden");

    setTimeout(function () {
        copied.classList.add("hidden");
    }, 500);
}

// Enable all checkboxes
function enableCheckboxes() {
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    checkboxes.forEach(checkbox => {
        checkbox.disabled = false;
    });
}