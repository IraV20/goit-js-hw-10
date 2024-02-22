import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', createPromise);

function createPromise(e) {
  e.preventDefault();

  const delay = e.target.elements.delay.value * 1000;
  const state = e.target.elements.state.value;

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
