import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

Notiflix.Notify.init({ position: 'center-center' });

const dateInput = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button[data-start]');
startButton.disabled = true;

const secTime = document.querySelector('span[data-seconds]');
const minTime = document.querySelector('span[data-minutes]');
const hourTime = document.querySelector('span[data-hours]');
const dayTime = document.querySelector('span[data-days]');

let selectedDate;
let currentDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];

    if (selectedDate.getTime() > options.defaultDate.getTime()) {
      startButton.disabled = false;
    } else {
      return Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
};

flatpickr('#datetime-picker', options);

function startTimer() {
  let timerId = setInterval(() => {
    currentDate = new Date();
    const ms = selectedDate.getTime() - currentDate.getTime();

    if (selectedDate.getTime() <= currentDate.getTime()) {
      clearInterval(timerId);
      return;
    }

    const convertedMs = convertMs(ms);

    startButton.disabled = true;
    dateInput.disabled = true;

    secTime.textContent = addLeadingZero(convertedMs.seconds);
    minTime.textContent = addLeadingZero(convertedMs.minutes);
    hourTime.textContent = addLeadingZero(convertedMs.hours);
    dayTime.textContent = addLeadingZero(convertedMs.days);
  }, 1000);

}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

startButton.addEventListener('click', startTimer);
