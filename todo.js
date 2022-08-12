

const TODO_KEY = 'todolist';

const $todoForm  = document.querySelector('#todo-form');
const $todoInput = $todoForm.querySelector('input');
const $todoList  = document.querySelector('#todo-list ul');

let todos = [];

const CountTodo = () => {
  const $listCount = document.querySelector('#list-count');
  $listCount.innerHTML = todos.length;
}

const deleteTodo = (event) => {
  const li = event.target.parentNode;

  todos = todos.filter(todo => todo.id !== parseInt(li.id));
  li.remove();

  setTodoStorage();
}

const addTodo = (text, id) => {
  const $todo = document.createElement('li');
  $todo.innerHTML = text;
  $todo.id = id;

  const $button = document.createElement('button');
  $button.innerHTML = '삭제';
  $button.addEventListener('click', deleteTodo);

  $todo.append($button);
  $todoList.appendChild($todo);

  $todoInput.value = '';
}

const setTodoStorage = () => {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
  CountTodo();
}

const getTodoStorage = () => {
  const todolist = localStorage.getItem(TODO_KEY);
  if(todolist) todos = JSON.parse(todolist);
  CountTodo();
}

const todoSubmit = (event) => {
  event.preventDefault();

  const todo = $todoInput.value;
  
  if(todo === '') {
    alert(`할 일을 입력해주세요!`);
    $todoInput.focus();
    return;
  }

  const now = new Date().getTime();
  todos.push({
    id: now,
    text: todo
  });
  addTodo(todo, now);
  setTodoStorage();
};

$todoForm.addEventListener('submit', todoSubmit);
getTodoStorage();
todos && todos.map(todo => addTodo(todo.text, todo.id));