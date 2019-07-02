//START

let interval;
let time = document.getElementById('time');
let pomodoroTime = time.getAttribute('pomodoroTime');

//BREAK
let intervalBreak;
let timeBreak = document.getElementById('timeBreak');
let pomodoroBreak = timeBreak.getAttribute('pomodoroBreak');


// START
function start () {
  startPomodoro();
  intervalPomodoro();
}
function stop () {
  stopPomodoro();
}

function startPomodoro () {

  interval = setInterval(function(){
    decrement(pomodoroTime);
  }, 1000);
}

function decrement () {
  console.log('decrement', pomodoroTime)

  if(pomodoroTime > 0){
    pomodoroTime = pomodoroTime - 1;
    updateDom();
  }
  else{
    clearInterval(interval);
    decrementBreak();
  }
}

function intervalPomodoro() {
  intervalBreak = setInterval(function(){
    decrement(pomodoroTime)
  }, 1000);
}
// START

//BREAK
function startBreakPomodoro() {
  intervalBreak = setInterval(function(){
    decrementBreak(pomodoroBreak);
  }, 1000);
}

function decrementBreak () {
  console.log('decrementBreak', pomodoroBreak)

  if(pomodoroBreak > 0){
    pomodoroBreak = pomodoroBreak - 1;
    updateDom();
  }
  else{
    clearInterval(intervalBreak);
    decrement();
  }
}
//BREAK

//STOP
function stopPomodoro () {

  // if(pomodoroTime > 0){
  //   pomodoroTime = clearInterval(interval);
  // }
  clearInterval(interval);
  console.log('aaaaaaa');
}
//STOP


function formatTime (pomodoroTime) {
  let minutes = Math.floor(pomodoroTime % 3600 / 60);
  let seconds = Math.floor(pomodoroTime % 3600 % 60);

  return (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds
}

function updateDom () {
  time.innerHTML = formatTime(pomodoroTime);
  timeBreak.innerHTML = formatTime(pomodoroBreak);
}