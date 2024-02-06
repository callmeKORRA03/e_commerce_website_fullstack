let dayElement = document.querySelector('.day');
let hoursElement = document.querySelector('.hours');
let minutesElement = document.querySelector('.minutes');
let secondsElement = document.querySelector('.seconds');

let days = 3;  // Initial value set to 3 days
let hours = 23;  // Initial value set to 23 hours
let minutes = 19;  // Initial value set to 19 minutes
let seconds = 30;  // Initial value set to 30 seconds

function updateTime() {
    if (seconds > 0 || minutes > 0 || hours > 0 || days > 0) {
        if (seconds === 0) {
            if (minutes === 0) {
                if (hours === 0) {
                    if (days > 0) {
                        days--;
                        hours = 23;
                        minutes = 59;
                        seconds = 59;
                    }
                } else {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                }
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }
    }

    dayElement.textContent = `${days} : `;
    hoursElement.textContent = ` ${hours} : `;
    minutesElement.textContent = ` ${minutes} : `;
    secondsElement.textContent = ` ${seconds}`;
}

setInterval(updateTime, 1000);