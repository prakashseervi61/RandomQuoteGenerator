const passInput = document.getElementById("pass");
const copyBtn = document.getElementById("copy");
const generateBtn = document.getElementById("generate");
const lengthInput = document.getElementById("length");
const allCheck = document.getElementById("all");
const ucCheck = document.getElementById("uc");
const lcCheck = document.getElementById("lc");
const noCheck = document.getElementById("no");
const syCheck = document.getElementById("sy");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

allCheck.addEventListener("change", () => {
  const checked = allCheck.checked;
  ucCheck.checked = checked;
  lcCheck.checked = checked;
  noCheck.checked = checked;
  syCheck.checked = checked;
});

function updateAllCheckbox() {
  allCheck.checked =
    ucCheck.checked && lcCheck.checked && noCheck.checked && syCheck.checked;
}

ucCheck.addEventListener("change", updateAllCheckbox);
lcCheck.addEventListener("change", updateAllCheckbox);
noCheck.addEventListener("change", updateAllCheckbox);
syCheck.addEventListener("change", updateAllCheckbox);

function generatePassword() {
  let characters = "";
  if (allCheck.checked) {
    characters = upperCase + lowerCase + numbers + symbols;
  } else {
    if (ucCheck.checked) characters += upperCase;
    if (lcCheck.checked) characters += lowerCase;
    if (noCheck.checked) characters += numbers;
    if (syCheck.checked) characters += symbols;
  }

  const length = parseInt(lengthInput.value);
  if (!characters || length < 4 || length > 20) {
    passInput.value = "Invalid options";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * characters.length);
    password += characters[randIndex];
  }

  passInput.value = password;
}

function copyPassword() {
  navigator.clipboard.writeText(passInput.value);
}

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);
