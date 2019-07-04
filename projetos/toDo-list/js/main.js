let todoList = document.getElementById('todoList');
let todoListInputTask = document.getElementById('todoList_task');
let todoListInputTitle = document.getElementById('todoList_title');
let todoListInputColor = document.getElementById('todoList_color');

let containerList = document.createElement('div');
let ul = document.createElement('ul');

let isEditing = undefined;

containerList.className = 'containerList'
ul.id='ul'

todoList.appendChild(containerList);
containerList.appendChild(ul);


function handleNewTask(){
  if (typeof(isEditing) == 'number') {
		handleEditTask();
  }
  else{
    render();
    clearValues();
  }
}

function render(){
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
  li.style.backgroundColor = infos.color
  
  ul.appendChild(li);
  li.appendChild(createTextTitle);
  li.appendChild(createTextTask);
  li.appendChild(createTextColor);

  //Container btns
  const containerBtns = document.createElement('div');
  containerBtns.className='containerBtns'
  li.appendChild(containerBtns)
  
  //Btn Remove Task
  const removeBtn = document.createElement('button');
  removeBtn.className='removeBtn btn'

  removeBtn.addEventListener('click', function(){
    ul.removeChild(li)
  });
  removeBtn.innerHTML = 'x';
  containerBtns.appendChild(removeBtn);

  //Btn Edit Task
  const editBtn = document.createElement('button');
  editBtn.className='editBtn btn'

  editBtn.addEventListener('click', function(infos){
    todoListInputTitle.value = getInputTitle
    todoListInputTask.value = getInputTask
    todoListInputColor.value = getInputColor
    isEditing = infos

    handleEditTask()
  });
  editBtn.innerHTML = 'Edit';
  containerBtns.appendChild(editBtn);

  clearValues();
}

function handleEditTask (infos) {
  infos[isEditing] = {
    title: todoListInputTitle.value,
    task: todoListInputTask.value,
    color: todoListInputColor.value
  };

  isEditing = undefined;
  clearValues();
  render();
  console.log('handleEditTask', handleEditTask)

}

function handleRemoveAllTasks() {
  const removeAll = document.getElementsByClassName('list');
  
  for (let i=0; list=removeAll[i]; i){
    list.parentNode.removeChild(list);
  }
}

function clearValues () {
  todoListInputTitle.value = ''
  todoListInputTask.value = ''
  todoListInputColor.value = '#dddddd'
}