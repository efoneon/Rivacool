const number = document.getElementById('number');
const button = document.getElementById('button-to-click');

function generate() {
  const min = 1;
  const max = 100;
  const generatedNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  number.textContent = generatedNumber;
}

button.addEventListener('click', generate);
