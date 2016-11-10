//User clicked on the add button
//If there is any text inside the item field, add that text to the todo list

var removeIcon = "<i class=\"fa fa-trash-o\"></i>";
var completeIcon = "<i class=\"fa fa-check-circle-o\"></i>"

document.getElementById("addItem").addEventListener('click', function(){
	var value = document.getElementById("item").value;

	if(value) {
		addItemToDo(value);
		document.getElementById("item").value = "";
	}
});

function removeItem() {

	var item = this.parentNode.parentNode;
	var parent = item.parentNode;

	parent.removeChild(item);
}


function completeItem() {
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;
	var id = parent.id;
	//Check if item should be added to completed or added to todo
	var target = (id === "todo") ? document.getElementById("completed") : document.getElementById("todo");
	
	parent.removeChild(item);
	target.insertBefore(item, target.childNodes[0]);
}

function addItemToDo(text) {
	var list = document.getElementById("todo");

	var item = document.createElement("li");
	item.innerText = text;

	var buttons = document.createElement("div");
	buttons.classList.add("buttons");

	var remove = document.createElement("button");
	remove.classList.add("remove");
	remove.innerHTML = removeIcon;


	//Add click event for removing items
	remove.addEventListener("click", removeItem);

	var complete = document.createElement("button");
	remove.classList.add("complete");
	complete.innerHTML = completeIcon;

	//Add click event for completing items
	complete.addEventListener('click', completeItem);

	buttons.appendChild(remove);
	buttons.appendChild(complete);
	item.appendChild(buttons);
	list.insertBefore(item, list.childNodes[0]);
}