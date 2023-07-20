const addButton = document.getElementById("add");
const removeButton = document.getElementById("delete");


function addTask() {
  const inputValue = document.getElementById("input");
  const listContainer = document.getElementById("list-container");
  const taskItem = document.createElement("li");
  if (inputValue.value !== "") {
    listContainer.appendChild(taskItem);
    taskItem.innerText = inputValue.value;
  } else {
    inputValue.value = "";
  }

  inputValue.value = "";
}

function removeTasks(){
  const taskContainer = document.getElementById("list-container");
  taskContainer.innerHTML = "";
}

removeButton.addEventListener("click", removeTasks);
addButton.addEventListener("click", addTask);
