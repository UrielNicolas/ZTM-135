var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";
	li.appendChild(deleteButton);
	li = document.querySelectorAll("li");
	listeForEvents(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function listeForEvents(list) {
	list.forEach(element => {
		element.addEventListener("click", function(event) {
			if (event.target.tagName === "LI") {
				toggleDoneClass(element);
			}
			else if(event.target.tagName === "BUTTON") {
				removeTask(element);
			}
		})
	})
}

function toggleDoneClass(element) {
	element.classList.toggle("done");
}

function removeTask(element) {
	element.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

listeForEvents(li);

