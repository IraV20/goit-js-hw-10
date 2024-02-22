import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const delayInput = document.querySelector('input[name="delay"]');
const stateInput = document.querySelectorAll('input[name="state"]');

form.addEventListener('submit', createPromise);

function createPromise(e) {
  e.preventDefault();

  const delay = delayInput.value;
  let state;

  stateInput.forEach(input => {
    if (input.checked) {
      state = input.value;
    }
  });

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
  promise.then(onFulfilled, onRejected);

  function onFulfilled(res) {
    console.log(res);
    iziToast.success({
      title: '✅',
      message: `Fulfilled promise in ${delay}ms`,
      position: 'topRight',
      messageColor: '#fff',
      backgroundColor: '#59A10D',
      messageSize: '16px',
      messageLineHeight: '1.5',
      close: true,
    });
  }

  function onRejected(err) {
    console.log(err);
    iziToast.error({
      title: '❌',
      message: `Rejected promise in ${delay}ms`,
      position: 'topRight',
      messageColor: '#fff',
      backgroundColor: '#EF4040',
      messageSize: '16px',
      messageLineHeight: '1.5',
      close: true,
    });
  }
}
