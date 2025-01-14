function submitForm() {
  if (document.getElementById("inputTask").value == "") {
    window.alert("Please input some lists");
  } else {
    const newTask = document.createElement("li");
    const taskList = document.getElementById("taskLists");
    taskList.appendChild(newTask);
    newTask.textContent = document.getElementById("inputTask").value;
    document.getElementById("inputTask").value = "";
    deleteTask(newTask);
  }
}

function deleteTask(newTask) {
  let deleteBtn = document.createElement("buttom");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("deletebutton");
  newTask.appendChild(deleteBtn);
  deleteBtn.onclick = function () {
    newTask.remove();
    window.alert("Do you want to delete this list ?");
  };
}
