const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutsEl = document.getElementById("minuts");
const secondEl = document.getElementById("second");

const newYear = "1 Jan 2022";

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const tottleSecond = (newYearDate - currentDate) / 1000;

    const days = Math.floor(tottleSecond / 3600 / 24);
    const hours = Math.floor(tottleSecond / 3600) % 24;
    const minuts = Math.floor(tottleSecond / 60) % 60;
    const second = Math.floor(tottleSecond) % 60;

    daysEl.innerHTML = formateTime(days);
    hoursEl.innerHTML = formateTime(hours);
    minutsEl.innerHTML = formateTime(minuts);
    secondEl.innerHTML = formateTime(second);
};

function formateTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
countdown();
setInterval(countdown, 1000);