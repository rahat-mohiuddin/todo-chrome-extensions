function digitalClock() {
    let date = new Date();
    let houre = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let timeFormate = 'AM';
    if (houre > 12) {
        houre = houre - 12;
        timeFormate = 'PM';
    }
    houre = houre < 10 ? '0' + houre : houre;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    let finalTime = `${houre}: ${minute}: ${second}`;
    const Time = document.querySelector('.time');
    const Formate = document.querySelector('.am-pm');
    Time.innerText = finalTime;
    Formate.innerText = timeFormate;
}

setInterval(digitalClock, 1000);

// Popup
let taskButton = document.querySelector('.task-btn');
let taskList = document.querySelector('#modal');
let overlay = document.querySelector('.overlay');
taskButton.addEventListener('click', openModal);
window.addEventListener('click', outsideClick);

function openModal(){
    taskList.classList.add('open');
    overlay.style.display = 'block';
}
function outsideClick(e) {
    if (e.target == overlay) {
        taskList.classList.remove('open');
        overlay.style.display = 'none';
    }
}

// Today Date
var today = new Date();
var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
let DateDisplay = document.getElementById('today');
DateDisplay.innerHTML = date;
