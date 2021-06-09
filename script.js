const form = document.querySelector("form");
const bar = document.querySelector(".bar");
const paint = document.querySelector(".paint");
const guess = document.querySelector("#guess");
const resultOne = document.querySelector(".result-one");
const resultTwo = document.querySelector(".result-two");

function show() {
    paint.innerHTML=`Generate a number between 0 and ${bar.value}`
}

function submit(e) {
    e.preventDefault();
    const machine = Math.floor(Math.random() * bar.value);
    const value = guess.value;
    if (!value) {
        resultOne.innerHTML="YOU HAVE TO GUESS A NUMBER!"
        resultTwo.innerHTML="";
    } else {
        guess.value = "";
        resultOne.innerHTML = `You choose: ${value}, Machine choose: ${machine}`
        if (value == machine) {
            resultTwo.innerHTML="<b>YOU WON!</b>"
        } else {
            resultTwo.innerHTML="<b>YOU LOOSE...</b>"
        }
    }
}

function init() {
    show();
    form.addEventListener("change", show)
    form.addEventListener("submit", submit);
}

init();
