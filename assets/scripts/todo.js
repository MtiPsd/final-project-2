import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from "./utils.js";

const taskList = document.querySelector(".todo__list");
const addBtn = document.querySelector(".add-btn");
const input = document.getElementById("todo-input");

let tasks = getDataFromLocalStorage("todo") || [];

export function getTasks() {
  const tasks = getDataFromLocalStorage?.("todo");
  if (tasks) {
    renderTasks(tasks);
  }
}

function createTask(e) {
  const title = input.value.trim();
  const id = crypto.randomUUID();

  if (e.key === "Enter" || e.type === "click") {
    e.preventDefault();

    if (!input.value.trim()) {
      alert("Type something, bro!");
      return;
    }

    const newTask = { title, id };
    tasks = [...tasks, newTask];
    saveDataToLocalStorage("todo", tasks);
    renderTasks(tasks);

    input.value = "";
    input.focus();
  }
}

function deleteTask(e) {
  const target = e.target;

  if (target.matches(".fa-trash")) {
    const id = e.target.dataset.id;
    tasks = tasks.filter(task => task.id !== id);
    saveDataToLocalStorage("todo", tasks);
    renderTasks(tasks);
  }
}

function renderTasks(tasks) {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    taskList.insertAdjacentHTML(
      "beforeend",
      `
         <li class="todo__item">
             <i class="fa-solid fa-trash todo__item--icon" data-id="${task.id}"></i>
             
             <div>
               <p class="todo__item--text">${task.title}</p>
               <div class="todo__item--checkbox"></div>
             </div>
         </li>
      `,
    );
  });
}

////////////// Listeners //////////////
addBtn.addEventListener("click", createTask);
input.addEventListener("keydown", createTask);
taskList.addEventListener("click", deleteTask);
