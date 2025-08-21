/* Created on Aug 20th, 2025

made by FillyRoid
 */



const start_btn = document.querySelector("#start-btn");
const stop_btn = document.querySelector("#stop-btn");
const reset_btn = document.querySelector("#reset-btn");

const clock_output = document.querySelector("#clock");
const clock_secure = document.querySelector(".timer-con");

/* Create Vars */
var second = 0;
var minute = 0;
var hour = 0;


/* Stopwatch function */
function stopwatch() {
    second++;

    if (second == 60) {
        minute++;
        second = 0;

        if (minute == 60) {
            hour++;
            minute = 0;
        }
    }

    hour = String(hour).padStart(2, "0");
    minute = String(minute).padStart(2, "0");
    second = String(second).padStart(2, "0");

    clock_output.textContent = `${hour}:${minute}:${second}`;

    test = setTimeout(stopwatch, 1000);
}

/* reset function */
function reset_stopwatch() {
    second = 0;
    minute = 0;
    hour = 0;

    hour = String(hour).padStart(2, "0");
    minute = String(minute).padStart(2, "0");
    second = String(second).padStart(2, "0");

    clock_output.textContent = `${hour}:${minute}:${second}`;
}




/* Start Button */
start_btn.addEventListener("click", function() {
    console.log("Start button clicked!");

    if (clock_secure.getAttribute("id") != "running") {
        clock_secure.setAttribute("id", "running");
        setTimeout(stopwatch, 1000);
    }


});

/* Stop Button */
stop_btn.addEventListener("click", function() {
    console.log("Stop button clicked!");
    window.clearInterval(test);
    clock_secure.removeAttribute("id");
});

/* Reset Button */
reset_btn.addEventListener("click", function() {
    console.log("Reset button clicked!");
    reset_stopwatch();
});