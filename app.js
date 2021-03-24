// 1. Use a setTimeout method to have "Hi" displayed as a p element/tag inside the div with the id of "first" 1 second after the page loads.

setTimeout(() => {
    const divOne = document.querySelector(`#first`);
    const p = document.createElement(`p`);
    p.innerText = `HI`;
    divOne.append(p);
}, 1000);

// 2. Use nested setTimeout methods to complete the following: Have the text of "One" displayed as a p element/tag inside the div with the id of "timeout-nesting" 2 seconds after the page loads. Also, below the "One" p element/tag, have the text of "Two" also displayed as a p element/tag inside the same div 3 seconds after the page loads.

setTimeout(() => {
    const divTN = document.querySelector(`#timeout-nesting`);
    const p1 = document.createElement(`p`);
    p1.innerText = `One`;
    divTN.append(p1);

    setTimeout(() => {
        const p2 = document.createElement(`p`);
        p2.innerText = `Two`;
        divTN.append(p2);
    }, 1000);

}, 2000);

// 3a.  Use a setInterval method to display a counter in the console that starts at 1 and continues going up one number at a time every second.
let i = 0
const timer = setInterval(() => {
    console.log(i);
    i++
}, 1000);

// 3b. Have the "STOP" button set up so that when it is pressed the setInterval method created in 3a will stop continuously running (HINT: Need to create a variable).

const stop = document.querySelector(`button`);
stop.addEventListener(`click`, () => {
    clearInterval(timer);
});

// BONUS…
// 4. Using setInterval, display a countdown clock as a p element/tag inside the div with the id of "countdown". Have the countdown clock start at 2 minutes and count down. The countdown clock should display in the following format (Example: 2:00 to start and 0:00 at end). ALSO, when the countdown timer hits zero have it display a message saying… "TIME IS UP" instead of the clock (AKA 0:00).
var count = 120

const divCD = document.querySelector(`#countdown`);
const p3 = document.createElement(`p`);

const clock = setInterval(() => {

    if (count > 0) {

        m = Math.trunc(count / 60);
        s = count % 60;
        sc = s.toString();

        if (s < 10) {
            sc = `0` + s.toString();
        }

        var time = m.toString() + `:` + sc;
        p3.innerText = (time);
        divCD.append(p3);
    } else {
        clearInterval(clock);
        p3.innerText = (`TIME IS UP`);
        divCD.append(p3);
    }
    count--
}, 1000);
