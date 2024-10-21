const addBtn = document.getElementById("add-Btn");
const todoInput = document.getElementById("input");
const todoList = document.getElementById("to-do");

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const taskInput = todoInput.value;
  const newTask = document.createElement("li");
  newTask.textContent = taskInput;
  todoList.appendChild(newTask);
  todoInput.value = "";

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Delete Task";
  removeBtn.addEventListener("click", () => {
    todoList.removeChild(newTask);
  });

  newTask.appendChild(removeBtn)
//   newTask.addEventListener("click", () => {
//     todoList.removeChild(newTask);
//   });
});
