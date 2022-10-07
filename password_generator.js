const chars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
];

let generatedPassword = [];

const getRandomChar = () => chars[Math.floor(Math.random() * chars.length)];

const generatePassword = (length) => {
  for (let i = 0; i < length; i++) {
    generatedPassword.push(getRandomChar());
  }
};

const generateAllPasswords = () => {
  checkPasswordLength();
  passwords.forEach((element) => {
    generatePassword(passwordLengthInputEl.value);
    element.textContent = generatedPassword.join("");
    generatedPassword = [];
  });
};

const checkPasswordLength = () => {
  if (passwordLengthInputEl.value < 5) {
    passwordLengthInputEl.value = 5;
  } else if (passwordLengthInputEl.value > 15) {
    passwordLengthInputEl.value = 15;
  }
};

const copyToClipboard = async (elementId) => {
  const element = document.getElementById(elementId);
  if (
    element &&
    navigator &&
    navigator.clipboard &&
    navigator.clipboard.writeText
  ) {
    return Promise.resolve(navigator.clipboard.writeText(element.innerHTML));
  }
  return Promise.reject("The Clipboard API is not available.");
};

const copyMessage = () => {
  copyMessageEl.remove();
  copyMessageEl = document.createElement("p");
  document.getElementById("container").appendChild(copyMessageEl);
  copyMessageEl.textContent = "Copied to clipboard!";
  copyMessageEl.classList.add("copied-to-clipboard-message");
};

const passwordLengthInputEl = document.getElementById("password-length-input");
const buttonEl = document.getElementById("button");
const passwords = document.querySelectorAll(".password-text");

buttonEl.addEventListener("click", generateAllPasswords);

let copyMessageEl = document.createElement("p");
document.getElementById("container").appendChild(copyMessageEl);
copyMessageEl.textContent = "Copied to clipboard!";
copyMessageEl.classList.add("copied-to-clipboard-message");
copyMessageEl.style.visibility = "hidden";

generateAllPasswords();
