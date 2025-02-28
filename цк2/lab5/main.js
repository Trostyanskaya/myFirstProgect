// Напишите функцию, принимающую на вход массив вещественных
// чисел и возвращающую сумму элементов массива, расположенных до
// минимального элемента.

function sumBeforeMin(arr) {
    if (arr.length === 0) return 0;
    let minIndex = arr.indexOf(Math.min(...arr));
    return arr.slice(0, minIndex).reduce((acc, curr) => acc + curr, 0);
}

let arr = [2, 32, 3, -2, 30]; // Массив для проверки
console.log(sumBeforeMin(arr)); // Вывод: 37


/*
Напишите функцию, принимающую на вход вещественную
прямоугольную матрицу и возвращающую номера строк и столбцов
всех седловых точек матрицы.
Матрица A имеет седловую точку Aминимальныеi,j, если Ai,j является минимальным
элементом в i-й строке и максимальным элементом в j-м столбце.
*/

function saddlePoints(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return [];

    const rows = matrix.length;
    const cols = matrix[0].length;

    let minInRows = [];
    for (let i = 0; i < rows; i++) {
        minInRows.push(Math.min(...matrix[i]));
    }

    let maxInCols = [];
    for (let j = 0; j < cols; j++) {
        let col = matrix.map(row => row[j]);
        maxInCols.push(Math.max(...col));
    }

    let saddlePoints = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === minInRows[i] && matrix[i][j] === maxInCols[j]) {
                saddlePoints.push([i, j]);
            }
        }
    }

    return saddlePoints;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(saddlePoints(matrix)); // [[2, 0]]
