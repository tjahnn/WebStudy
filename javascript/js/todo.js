const todoform = document.querySelector("#todo-form");
const todoinput = document.querySelector("#todo-form input");
const todolist = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function loadTodos() {
  toDos = [];
  loadedtodos = JSON.parse(localStorage.getItem(TODOS_KEY));
  if (null == loadedtodos) return;
  loadedtodos.forEach((ele) => {
    toDos.push(ele);
  });
}

function deleteTodo(elem) {
  const delid = elem.target.parentElement.id;
  toDos = toDos.filter((ele) => {
    return ele.id !== parseInt(delid);
  });
  saveTodos();
  loadTodos();
  showTodos();
}

function showTodos() {
  todolist.innerHTML = "";
  toDos.forEach((todoObj, idx) => {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.id = todoObj.id;
    const span = document.createElement("span");
    span.classList.add("todo-title");
    span.innerText = todoObj.title;
    const btn = document.createElement("button");
    btn.classList.add("todo-delbtn");
    btn.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(btn);
    todolist.appendChild(li);
  });
}

function submitTodoList(ev) {
  ev.preventDefault();
  const newTodo = todoinput.value;
  const newTodoObj = {
    id: Date.now(),
    title: newTodo
  };
  toDos.push(newTodoObj);
  todoinput.value = "";
  saveTodos();
  loadTodos();
  showTodos();
}

todoform.addEventListener("submit", submitTodoList);

loadTodos();
showTodos();
