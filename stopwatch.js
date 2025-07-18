// Stopwatch Program

const display = document.getElementById("display");

let timer = null;
let stratTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        stratTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - stratTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    stratTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update(){
    const cuurrentTime = Date.now();
    elapsedTime = cuurrentTime - stratTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
    let seconds = Math.floor(elapsedTime / 1000) % 60;
    let miliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    miliseconds = String(miliseconds).padStart(2, '0');

    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}