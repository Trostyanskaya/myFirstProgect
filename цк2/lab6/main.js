//1
function findCommonElements(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const commonElements = new Set([...set1].filter(x => set2.has(x)));
    return Array.from(commonElements);
}

const array1 = [1, 2, 3, 4];
const array2 = [2, 3, 4, 5, 6];
console.log(findCommonElements(array1, array2)); // [2, 3, 4]



//2
function countOccurrences(arr) {
    const occurrences = new Map();
    for (const item of arr) {
        if (occurrences.has(item)) {
            occurrences.set(item, occurrences.get(item) + 1);
        } else {
            occurrences.set(item, 1);
        }
    }
    return occurrences;
}

const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const occurrencesMap = countOccurrences(array);
console.log(Array.from(occurrencesMap.entries())); // [[1, 1], [2, 2], [3, 3], [4, 4]]


//3
class Student {
    constructor(name, group) {
        this.name = name;
        this.group = group;
    }
}

function countStudentsInLargestGroup(students) {
    const groupCounts = new Map();

    for (const student of students) {
        const group = student.group;
        if (groupCounts.has(group)) {
            groupCounts.set(group, groupCounts.get(group) + 1);
        } else {
            groupCounts.set(group, 1);
        }
    }

    let maxCount = 0;
    let largestGroup = null;
    for (const [group, count] of groupCounts.entries()) {
        if (count > maxCount) {
            maxCount = count;
            largestGroup = group;
        }
    }

    return { group: largestGroup, count: maxCount };
}

const students = [
    new Student("Маша", "один"),
    new Student("Петя", "два"),
    new Student("Вася", "три"),
    new Student("Дима", "один"),
    new Student("Лиза", "один")
];

const result = countStudentsInLargestGroup(students);
console.log(`Самая большая группа: ${result.group}, количество студентов: ${result.count}`); // Самая большая группа: один, количество студентов: 3