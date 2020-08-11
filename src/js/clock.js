const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");

function getCurrentTime(){
    const currentDate = new Date();
    const currentTime = {
        hours : currentDate.getHours(),
        minutes : currentDate.getMinutes(),
        seconds : currentDate.getSeconds()
    };
    clockTitle.innerText = 
    `${setTwoDigits(currentTime.hours)}:${setTwoDigits(currentTime.minutes)}:${setTwoDigits(currentTime.seconds)}`;
}

function setTwoDigits(number){
    return number>10? number : `0${number}`;
}

function init(){
    setInterval(getCurrentTime,1000);
}

init();