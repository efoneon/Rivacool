const number = document.getElementById('number');
const button = document.getElementById('button-to-click');

function generate() {
  const generatedNumber = Math.random();
  number.textContent = generatedNumber;
}

button.addEventListener('click', generate);
