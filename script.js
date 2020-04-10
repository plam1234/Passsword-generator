// Assignment Code
var generateBtn = document.querySelector(".btn");
var copyBtn = document.querySelector("#copy-pass");
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function () {
  output.innerHTML = this.value;
};

// Generating Password
function genPass() {
  // length of password
  var passLen = slider.value;
  // variable to hold password
  var values =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
  // for loop for generating password
  let passwords = "";
  for (var i = 1; i <= passLen; i++) {
    passwords += values.charAt(
      Math.floor(Math.random() * Math.floor(values.length - 1))
    );
  }
  console.log(genPass);
  document.querySelector("#password").textContent = passwords;
}

// Copy Password to Clipboard
function copyPass() {
  document.querySelector("#password").select();
  document.execCommand("copy");
  alert("Password copied!");
}

// Add event listener to generate button
copyBtn.addEventListener("click", copyPass);
generateBtn.addEventListener("click", genPass);
