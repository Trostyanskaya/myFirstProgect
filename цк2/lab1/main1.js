alert(
  'Программа, которая считывает единственное целое число x и проверяет, является ли оно совершенным. Совершенным называется число, равное сумме всех своих собственных делителей (отличных от x).'
);
function isPerfect(x) {
    if (typeof x !== 'number' || !Number.isInteger(x)  || x <= 1) {
      return false;
    }
  
    let sumOfMultipliers = 0;
    for (let i = 1; i < x; i++) {
      if (x % i === 0) {
        sumOfMultipliers += i;
      }
    }
  
    return sumOfMultipliers === x;
  }
  
  
  function run() {
    const input = prompt("Введите целое число:");
    const number = parseInt(input);
  
    if (isNaN(number)) {
      alert("Ошибка: Введено некорректное значение. Введите целое число.");
      return;
    }
  
    if (isPerfect(number)) {
      alert(number + ' является совершенным числом.');
    } else {
      alert(number + ' не является совершенным числом.');
    }
  }
  
  run();