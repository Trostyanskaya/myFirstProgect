class Student {
    constructor(lastName, firstName) {
        this.lastName = lastName;
        this.firstName = firstName;
    }

    getFullName() {
        return `${this.lastName} ${this.firstName}`;
    }
}

function compareStudents(a, b) {
    if (a.lastName === b.lastName) {
        return a.firstName.localeCompare(b.firstName);
    }
    return a.lastName.localeCompare(b.lastName);
}

function binarySearch(students, fullName) {
    let left = 0;
    let right = students.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const currentFullName = students[mid].getFullName();

        if (currentFullName === fullName) {
            return students[mid];
        } else if (currentFullName < fullName) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return null;
}

// Пример использования
const students = [
    new Student("Тростянская", "Елизавета"),
    new Student("Иванов", "Иван"),
    new Student("Зотова", "Мария"),
    new Student("Свирина", "Варвара")
];

students.sort(compareStudents);

const studentToFind = "Тростянская Елизавета";
const foundStudent = binarySearch(students, studentToFind);

if (foundStudent) {
    console.log(`Студент найден: ${foundStudent.getFullName()}`);
} else {
    console.log("Студент не найден");
}