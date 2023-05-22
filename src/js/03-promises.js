import Notiflix from 'notiflix';

Notiflix.Notify.init({ position: 'center-center' });

const formItem = document.querySelector('.form');
const delayItem = document.querySelector('[name="delay"]');
const stepItem = document.querySelector('[name="step"]');
const amountItem = document.querySelector('[name="amount"]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const canFulfill = Math.random() > 0.3;
      const result = { position, delay };

      if (canFulfill) {
        resolve(result);
      } else {
        reject(result);
      }
    }, delay);
  });
}

formItem.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let delayValue = Number(delayItem.value);
  const stepValue = Number(stepItem.value);
  const amountValue = Number(amountItem.value);

  formItem.reset();

  for (let i = 1; i <= amountValue; i += 1) {
    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })

      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });

    delayValue += stepValue;
  }
}


