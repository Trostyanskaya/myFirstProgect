alert(
  'lab2'
);


function inputNumber() {
  return parseFloat(prompt('Введите число'));
}

function isValidInput(a, b, c) {
  return !(Number.isNaN(a) && Number.isNaN(b) && Number.isNaN(c));
}

function maxBy(a, b, c) {
  return a * b * c / (Math.min(a, b, c));
}

const a = inputNumber();
const b = inputNumber();
const c = inputNumber();

alert('Произведение двух максимальных чисел: ' + maxBy(a, b, c));


function title(name, rank = 'рядовой') {
  return `Имя: ${name}, Звание: ${rank}`;
}
let inputName = prompt("Введите имя:");

if (inputName === null || inputName.trim() === "") {
    alert("Вы не ввели имя.");
} else {
    let inputRank = prompt("Введите звание (по умолчанию 'рядовой'):");
    if (inputRank !== null && inputRank.trim() !== "") {
        alert(title(inputName, inputRank));
    } else {
        alert(title(inputName));
    }
}

function factorial(n) {
  if (n === 0 || n === 1) {
      return 1;
  }
  return n * factorial(n - 1);
}

const n = parseFloat(prompt('Введите число'));

alert(`${n}! = ` + factorial(n));
