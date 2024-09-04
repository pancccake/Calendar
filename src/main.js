let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const days = document.querySelector('.calendar-dates');
const display = document.querySelector('.display');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const p = document.querySelector('header p');

createCalendar();

left.addEventListener('click', () => {
    days.innerHTML = "";

    month -= 1;

    if(month < 0) {
        month = 11;
        year -= 1;
    }

    date.setMonth(month);
    date.setFullYear(year);

    createCalendar();

    p.style.color = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
})

right.addEventListener('click', () => {
    days.innerHTML = "";

    month += 1;

    if(month > 11) {
        month = 0;
        year += 1;
    }

    date.setMonth(month);
    date.setFullYear(year);

    createCalendar();

    p.style.color = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
})

function createCalendar() {
    const firstDay = new Date(year, month, 1);

    const lastDay = new Date(year, month + 1, 0);

    const firstDayIndex = firstDay.getDay();

    const numberOfDays = lastDay.getDate();

    let formattedDate = date.toLocaleString(navigator.language, {
        month: "long",
        year: "numeric"
    });

    display.innerHTML = `${formattedDate}`;


    for (let i = 1; i <= firstDayIndex; i++) {
        const div = document.createElement('div');
        div.innerHTML += "";
        div.style.backgroundColor = 'white';
        div.style.cursor = 'auto';

        days.appendChild(div);
    }


    for (let x = 1; x <= numberOfDays; x++) {
        let div = document.createElement('div');
        let currentDate = new Date(year, month, x);

        div.dataset.date = currentDate.toDateString();

        div.innerHTML += x;
        days.appendChild(div);

        if (currentDate.getFullYear() === date.getFullYear() && currentDate.getMonth() === date.getMonth() && currentDate.getDate() === date.getDate()) {
            div.style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
            div.style.color = 'white';
            div.style.borderRadius = '100%';
        }
    }
}

