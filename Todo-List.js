const todoList = [{
  name: 'Weekend Party',
  dueDate: '2022-12-22',
  time: '08:19 PM'
}, {
  name: 'Presentation',
  dueDate: '2022-12-22',
  time: '08:19 PM'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate, time } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <div>${time}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button> 
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  const timeInputElement = document.querySelector('.js-time-input');
  const time = timeInputElement.value;


  todoList.push({

    name,
    dueDate,
    time
  });

  inputElement.value = '';

  renderTodoList();
}