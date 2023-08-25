# button

## Append Text to P Tag
This code creates a textbox and a button. The textbox allows the user to enter text, and the button appends the text to a p tag.

HTML
The HTML code for the textbox and button is as follows:

html
<html>
<head>
<title>Append Text to P Tag</title>
</head>
<body>
<div id="container"></div>
<script src="script.js"></script>
</body>
</html>

The div element with the id container is where the textbox and button will be displayed. The script element loads the JavaScript file that contains the code for the textbox and button.

JavaScript
The JavaScript code for the textbox and button is as follows:

javascript
var textBox = document.createElement("input");
textBox.type = "text";
textBox.id = "textBox";

var button = document.createElement("button");
button.textContent = "Add";
button.onclick = function() {
var text = document.getElementById("textBox").value;
var pTag = document.createElement("p");
pTag.textContent = text;
document.getElementById("container").appendChild(pTag);
};

var container = document.getElementById("container");
container.appendChild(textBox);
container.appendChild(button);

The textBox variable creates a textbox element. The button variable creates a button element. The onclick event listener for the button element gets the text from the textbox element and creates a new p tag with the text. The p tag is then appended to the container element.
