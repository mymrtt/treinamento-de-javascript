//START
let interval;
let time = document.getElementById('time');
let pomodoroTime = time.getAttribute('pomodoroTime');

//BREAK
let intervalBreak;
let timeBreak = document.getElementById('timeBreak');
let pomodoroBreak = timeBreak.getAttribute('pomodoroBreak');

let playing;


// START
function start () {
  startPomodoro();
  intervalPomodoro();
}
function stop () {
  stopPomodoro();
}

function startPomodoro () {

  if(!playing) {

    playing = true

    interval = setInterval(function(){
      decrement(pomodoroTime);
    }, 1000);
  }

}

function decrement () {
  console.log('decrement', pomodoroTime)

  if(pomodoroTime > 0){
    pomodoroTime = pomodoroTime - 1;
    updateDom();
  }
  // else if(){

  // }
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

  playing = false

  clearInterval(interval);
  console.log('stop', stopPomodoro);
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