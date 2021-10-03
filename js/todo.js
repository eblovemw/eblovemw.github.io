const $toDoForm = document.querySelector("#todo-form");
const $toDoInput = $toDoForm.querySelector("input");
const $toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];


function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const $li = event.target.parentElement;
  toDos = toDos.filter((item) => item.id !== parseInt($li.id));
  $li.remove();
  saveToDos();
}


function paintToDo(newTodoObj) {
 
  const $li = document.createElement("li");
  $li.id = newTodoObj.id;
  const $span = document.createElement("span");
  const $button = document.createElement("button");
  $span.innerText = newTodoObj.text;
  $button.innerText = '❌'
  $button.style.backgroundColor = 'transparent';
  $li.appendChild($span);
  $li.appendChild($button);
  $toDoList.appendChild($li);
  
  $button.addEventListener("click", deleteToDo);  
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = $toDoInput.value;
  $toDoInput.value = "";
  const newTodoObj = {
    text: newToDo,
    id: Date.now(),
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}



$toDoForm.addEventListener("submit", handleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); 
}