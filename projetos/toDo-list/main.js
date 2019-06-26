const todoList = document.getElementById('todoList');
let todoListInput = document.getElementById('todoList_input');
const containerList = document.createElement('div');
let ul = document.createElement('ul');

todoList.appendChild(containerList);
containerList.appendChild(ul);

function handleClick(){

  handleNewTask();
}

function handleNewTask(){
  let textInput = todoListInput.value

  let createText = document.createTextNode(textInput);
  let li = document.createElement('li');
  const liBtn = document.createElement('button');
  liBtn.innerHTML = 'Remover'

  ul.appendChild(li);
  li.appendChild(createText);
  li.appendChild(liBtn);
  
}

// function handleRemoveTask() {
//   const removeTask = 
// }
