let todoList = document.getElementById('todoList');

let todoListInputTask = document.getElementById('todoList_task');
let todoListInputTitle = document.getElementById('todoList_title');
let todoListInputColor = document.getElementById('todoList_color');

let containerList = document.createElement('div');
containerList.className = 'containerList'

let ul = document.createElement('ul');
ul.id='ul';

todoList.appendChild(containerList);
containerList.appendChild(ul);

function handleNewTask(){
  let infos = ({
    title: todoListInputTitle.value,
    task: todoListInputTask.value,
    color: todoListInputColor.value
  });

  let getInputTitle = infos.title;
  let getInputTask = infos.task;
  let getInputColor = infos.color;

  let createTextTitle = document.createElement('h2'); 
  let createTextTask = document.createElement('p'); 
  let createTextColor = document.createElement('p');

  createTextTask.innerHTML  = getInputTask
  createTextTitle.innerHTML = getInputTitle
  createTextColor.innerHTML = getInputColor
  
  let li = document.createElement('li');
  li.className='list'
  const removeBtn = document.createElement('button');

  li.style.backgroundColor = infos.color
  
  ul.appendChild(li);
  li.appendChild(createTextTitle);
  li.appendChild(createTextTask);
  li.appendChild(createTextColor);
  li.appendChild(removeBtn);

  //Remove
  removeBtn.className='removeBtn btn';
  removeBtn.addEventListener('click', handleRemoveTask);

  removeBtn.innerHTML = 'Remover';

  clearValues();

  function handleRemoveTask() {
    ul.removeChild(li)
  }
}

function clearValues () {
  todoListInputTitle.value = ''
  todoListInputTask.value = ''
  todoListInputColor.value = ''
}

function handleRemoveAllTasks() {

  const removeAll = document.getElementsByClassName('list');
  
  for (let i=0; list=removeAll[i]; i){
    list.parentNode.removeChild(list);
  }
  console.log('removeAll', removeAll)
}
