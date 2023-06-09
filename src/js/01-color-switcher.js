const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);

stopButton.setAttribute("disabled", "");

let intervalId;

function startColorChange() {
  intervalId = setInterval(changeBackgroundColor, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
}

function stopColorChange() {
  clearInterval(intervalId);
  stopButton.disabled = true;
  startButton.disabled = false;
}

function changeBackgroundColor() {
  let randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


