const addBtn = document.getElementById("add-Btn");
const todoInput = document.getElementById("input");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const taskInput = todoInput.value.trim();

  if (taskInput) {
    const newTask = document.createElement("li");
    newTask.classList.add("list-items");
    newTask.textContent = taskInput;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Delete Task";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to delete this task?")) {
        todoList.removeChild(newTask);
      }
    });
    newTask.appendChild(removeBtn);
    todoList.appendChild(newTask);
    todoInput.value = "";

    //Edit task items
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit Task";
    editBtn.classList.add("editBtn");
    newTask.appendChild(editBtn);
    editBtn.addEventListener("click", () => {
      const editInput = document.createElement("input");
      editInput.value = "";
      newTask.innerHTML = "";
      newTask.appendChild(editInput);
      //save edited task item
      const saveBtn = document.createElement("button");
      saveBtn.textContent = "Save Task";
      saveBtn.classList.add("saveBtn");
      newTask.appendChild(saveBtn);
      saveBtn.addEventListener("click", () => {
        const editedTask = editInput.value.trim();
        if (editedTask) {
          newTask.textContent = editedTask;
          newTask.appendChild(removeBtn);
          newTask.appendChild(editBtn);
        }
      });
    });
  }
});
