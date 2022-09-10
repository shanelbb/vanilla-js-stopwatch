// select the buttons and the time element
const time = document.querySelector('.time')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')
// create function that turns number into hours, mins & secs
const setTime = (val) => {
    const second = parseInt(val, 10);
    let hours = Math.floor(second / 3600);
    let minutes = Math.floor((second - (hours * 3600)) / 60)
    let seconds = second - (hours * 3600) - (minutes * 60)

    if (hours < 10) {hours = "0"+hours}
    if (minutes < 10) {minutes = "0"+minutes}
    if (seconds < 10) {seconds = "0"+seconds}
    time.innerHTML = `${hours}:${minutes}:${seconds}`
}

// create function that starts the timer
let sec = 0
let startTimer
const myTimer = () => {
    sec = sec + 1
    setTime(sec)
}

start.addEventListener('click', () => {
    if(!startTimer) {
        startTimer = setInterval(myTimer, 1000) 
    } 
    return
})

// create function that stops the timer

stop.addEventListener('click', () => {
    clearInterval(startTimer)
    startTimer = false
})
// create function that resets the timer

reset.addEventListener('click', () => {
    clearInterval(startTimer)
    startTimer = false
    setTime(0)
    sec = 0
})