
const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;


function counter() {
  const newYearDate = new Date('1 jan 2022').getTime();
  const currentDate = new Date().getTime();

  const diff = newYearDate - currentDate;

  const days = Math.floor(diff / oneDay);
  const hours = Math.floor((diff % oneDay) / oneHour);
  const minutes = Math.floor((diff % oneHour) / oneMinute);
  const seconds = Math.floor((diff % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  const newYearNumbers = document.querySelectorAll('.dead-line-number');

  newYearNumbers.forEach((item, index) => {
    item.innerHTML = values[index];
  });

  if (diff <= 0) {
    document.querySelector('.new-year-wrapper').innerHTML = `<h1>happpy new year ✨🎉</h1>`;
    clearInterval(interval);
  }
}

const interval = setInterval(counter, 1000);