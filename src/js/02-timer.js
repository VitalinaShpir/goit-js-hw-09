import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

const dateTimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button[data-start]');
// console.log(dateTimePicker);
// startButton.addEventListener('click', countdownTimer);

const options = {
    enableTime: true,
    time_24hr: true,
    minDate: "today",
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

flatpickr('#datetime-picker', options)

//   const countdownTimer = setInterval(function() {
//     timeDiff -= 1000; 
//     const seconds = Math.floor((timeDiff / 1000) % 60); 
//     const minutes = Math.floor((timeDiff / 1000 / 60) % 60); 
//     const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
//     const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
//     const timerDisplay = document.getElementById("timer"); 
//     timerDisplay.textContent = days + "д " + hours + "г " + minutes + "хв " + seconds + "с"; 
//     if (timeDiff <= 0) {
//       clearInterval(countdownTimer); 
//       timerDisplay.textContent = "Час вичерпано!";
//     }
//   }, 1000); 


console.log('hello');