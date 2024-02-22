import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('[data-start]');
const timerFields = document.querySelectorAll('.field');
const daysElement = timerFields[0].firstElementChild;
const hoursElement = timerFields[1].firstElementChild;
const minutesElement = timerFields[2].firstElementChild;
const secondsElement = timerFields[3].firstElementChild;
startBtn.disabled = true;
let timerIntervalId;
let userSelectedDate;
let diff;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0].getTime();
    // console.log(userSelectedDate);
    const diff = userSelectedDate - Date.now();
    // console.log(diff);

    if (diff > 0) {
      startBtn.disabled = false;
    } else {
      startBtn.disabled = true;
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        titleColor: '#FFFFFF',
        messageColor: '#FAFAFB',
        messageSize: '16',
        backgroundColor: '#EF4040',
        close: true,
        position: 'topRight',
      });
      daysElement.textContent = '00';
      hoursElement.textContent = '00';
      minutesElement.textContent = '00';
      secondsElement.textContent = '00';
    }

    addLeadingZero(diff);
  },
};

const input = document.querySelector('#datetime-picker');
flatpickr(input, options);

function addLeadingZero(diff) {
  diff = userSelectedDate - Date.now();
  daysElement.textContent = convertMs(diff).days.toString().padStart(2, '0');
  hoursElement.textContent = convertMs(diff).hours.toString().padStart(2, '0');
  minutesElement.textContent = convertMs(diff)
    .minutes.toString()
    .padStart(2, '0');
  secondsElement.textContent = convertMs(diff)
    .seconds.toString()
    .padStart(2, '0');

  if (diff <= 0) {
    timerStop();
  }
}

startBtn.addEventListener('click', timerStart);

function timerStart() {
  input.disabled = true;
  startBtn.disabled = true;

  timerIntervalId = setInterval(() => {
    addLeadingZero(diff);
  }, 1000);
}

function timerStop() {
  clearInterval(timerIntervalId);
  daysElement.textContent = '00';
  hoursElement.textContent = '00';
  minutesElement.textContent = '00';
  secondsElement.textContent = '00';
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

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
