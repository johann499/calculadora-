const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id === 'clear') {
      display.innerText = '';
    } else if (item.id === 'backspace') {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText !== '' && item.id === 'equal') {
      try {
        display.innerText = eval(display.innerText);
      } catch (e) {
        display.innerText = 'Error';
      }
    } else if (display.innerText === '' && item.id === 'equal') {
      display.innerText = 'Null';
      setTimeout(() => (display.innerText = ''), 2000);
    } else if (item.id === 'sin') {
      display.innerText = Math.sin(toRadians(display.innerText));
    } else if (item.id === 'cos') {
      display.innerText = Math.cos(toRadians(display.innerText));
    } else if (item.id === 'tan') {
      display.innerText = Math.tan(toRadians(display.innerText));
    } else {
      display.innerText += item.id;
    }
  };
});

function toRadians(angle) {
  return angle * (Math.PI / 180);
}

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');

let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle('dark');
  calculator.classList.toggle('light');
  themeToggleBtn.classList.toggle('active');
  isDark = !isDark;
};
