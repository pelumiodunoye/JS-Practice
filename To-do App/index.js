const addBtn = document.getElementById("add-Btn");
const todoInput = document.getElementById("input");
const todoDate = document.getElementById("dueDate");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const taskInput = todoInput.value.trim();
  const taskDate = todoDate.value;

  let newTask;

  if (taskInput && taskDate) {
    newTask = document.createElement("li");
    newTask.classList.add("list-items");
    newTask.textContent = `${taskInput} (Due on ${taskDate})`;
  } else if (taskInput) {
    newTask = document.createElement("li");
    newTask.classList.add("list-items");
    newTask.textContent = taskInput;
  } else {
    alert("Please enter a task.");
    return;
  }
  //Delete Task feature
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Delete Task";
  removeBtn.classList.add("remove-btn");
  removeBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this task?")) {
      todoList.removeChild(newTask);
      setTimeout(() => {
        alert("Task Deleted!");
      }, 0);
    }
  });
  newTask.appendChild(removeBtn);

  //Edit task items
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit Task";
  editBtn.classList.add("editBtn");
  newTask.appendChild(editBtn);
  editBtn.addEventListener("click", () => {
    const editInput = document.createElement("input");
    editInput.value = taskInput;
    const editDateInput = document.createElement("input");
    editDateInput.type = "date";
    editDateInput.value = taskDate;
    newTask.innerHTML = "";
    newTask.appendChild(editInput);
    newTask.appendChild(editDateInput);
    //save edited task item
    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save Task";
    saveBtn.classList.add("saveBtn");
    newTask.appendChild(saveBtn);
    saveBtn.addEventListener("click", () => {
      const editedTask = editInput.value.trim();
      const editedDate = editDateInput.value.trim();
      if (editedTask) {
        newTask.textContent = editedDate
          ? `${editedTask} (Due on: ${editedDate})`
          : editedTask;
        newTask.appendChild(removeBtn);
        newTask.appendChild(editBtn);
      }
    });
  });
  todoList.appendChild(newTask);
  todoInput.value = "";
  todoDate.value = "";
});
