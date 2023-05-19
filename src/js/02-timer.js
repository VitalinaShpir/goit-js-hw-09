import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const inputTimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button[data-start]');

const secTime = document.querySelector('span[data-seconds]');
const minTime = document.querySelector('span[data-minutes]');
const hourTime = document.querySelector('span[data-hours]');
const dayTime = document.querySelector('span[data-days]');
// console.log(inputTimePicker);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
  
  const timer = setInterval(() => {
       
        const selectedDate = selectedDates[0];
        const currentDate = new Date();

        if (selectedDate > currentDate) {
        const ms = selectedDate.getTime() - currentDate.getTime();
        const convertedMs = convertMs(ms);

        secTime.textContent = convertedMs.seconds;
        minTime.textContent = convertedMs.minutes;
        hourTime.textContent = convertedMs.hours;
        dayTime.textContent = convertedMs.days;}

        else{
          clearInterval(timer);
          return alert('Please choose a date in the future');
        }
      }, 1000);

  },
};


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

const dateTimePicker = flatpickr('#datetime-picker', options);

startButton.addEventListener('click', dateTimePicker);
console.log('hello');
