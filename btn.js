const textbox = document.querySelector("input");
const button = document.querySelector("button");
const p = document.querySelector("p");

button.addEventListener("click", function() {
  const text = textbox.value;

  // Create a new p tag and append it to the document
  const newP = document.createElement("p");
  newP.textContent = text;
  p.appendChild(newP);

  // Clear the textbox
  textbox.value = "";
});