// Assignment Code
var generateBtn = document.querySelector(".btn");
var copyBtn = document.querySelector(".btn");
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

// Generating Password
function genPass() {
  // length of password
  var passLen = slider.value;
  // variable to hold password
  var values =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
  // for loop for password
  let passwords = "";
  for (var i = 1; i <= passLen; i++) {
    passwords += values.charAt(
      Math.floor(Math.random() * Math.floor(values.length - 1))
    );
  }
  console.log(genPass);
  // Add event listener to generate button
  document.querySelector("#password").textContent = passwords;
}

// Copy Password to Clipboard
function copyPass() {}

slider.oninput = function () {
  output.innerHTML = this.value;
};

generateBtn.addEventListener("click", genPass);
copyBtn.addEventListener("click", copyPass);
