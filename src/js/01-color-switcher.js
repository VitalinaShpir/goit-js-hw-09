
const startButton = document.querySelector("button[data-start]");
const stopButton = document.querySelector("button[data-stop]");


startButton.addEventListener("click", startColorChange);
stopButton.addEventListener("click", stopColorChange);


let intervalId;

function startColorChange() {
  intervalId = setInterval(changeBackgroundColor, 1000);
}

function stopColorChange() {
  clearInterval(intervalId);
}

function changeBackgroundColor() {
  let randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
// console.log(startButton);
// console.log(stopButton);