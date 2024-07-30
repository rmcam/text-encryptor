const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const outputDiv = document.getElementById("output-div");
const outputShow = document.getElementById("output-show");
inputText.addEventListener("keypress", function (event) {
  const char = String.fromCharCode(event.which);
  const specialKeys = [8, 9, 13, 37, 38, 39, 40, 165]; // Backspace, Tab, Enter, Arrow keys
  if (specialKeys.indexOf(event.which) === -1) {
    if (char !== char.toLowerCase() || /[^a-z0-9 ]/i.test(char)) {
      event.preventDefault();
      alert("No se aceptan mayúsculas ni caracteres especiales.");
    }
  }
});
function encryptText() {
  validateStyle();
  outputText.innerHTML = encrypt(inputText.value);
}
function decryptText() {
  validateStyle();
  outputText.innerHTML = decrypt(inputText.value);
}
function validateStyle() {
  if (inputText.value != "") {
    outputDiv.style.display = "none";
    outputShow.style.display = "flex";
  } else {
    alert("Por favor, ingresa el texto que deseas encriptar o desencriptar");
  }
}
function cleanText() {
  inputText.value = "";
  outputText.innerHTML = "";
  outputDiv.style.display = "flex";
  outputShow.style.display = "none";
}

async function copyToClipboard() {
  const textarea = document.getElementById("output-text");
  try {
    await navigator.clipboard.writeText(textarea.value);
    alert("Texto copiado al portapapeles");
  } catch (err) {
    console.error("Error al copiar al portapapeles: ", err);
  }
}

function encrypt(text) {
  return text
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
}

function decrypt(text) {
  return text
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
}
