'use strict'

const button = document.getElementById('readBtn');
const fileInput = document.getElementById('fileInput');

button.onclick = () => {
    const file = fileInput.files[0];

    if (!file) {
        alert("Пожалуйста, выберите файл.");
        return;
    }

    const reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function () {
        try {
            const parsedObject = JSON.parse(reader.result);

            const studentInstance = new Student(
                parsedObject.firstName,
                parsedObject.lastName,
                parsedObject.marks
            );

            console.log("\nИсходная информация о студенте:");
            studentInstance.printInfo();

            studentInstance.addMark(prompt("Введите предмет для добавления оценки"), prompt("Введите оценку"));
            console.log("\nПосле добавления новой оценки:");
            studentInstance.printInfo();

            console.log("\nОценки по предмету :", studentInstance.getMarksBySubject(prompt("Введите предмет для получения оценки по предмету")));

            studentInstance.removeMarksBySubject((prompt("Введите предмет для удаления оценки")));
            console.log("\nПосле удаления оценок по предмету: ");
            studentInstance.printInfo();

            console.log("\nСредняя оценка:", studentInstance.getAverageMark());
        } catch (error) {
            console.error("Ошибка при парсинге JSON:", error.message);
            alert("Выбранный файл содержит некорректный JSON.");
        }
    };

    reader.onerror = function () {
        console.error("Произошла ошибка при чтении файла.");
        alert("Произошла ошибка при чтении файла.");
    };
};

class Mark {
    constructor(subject, mark) {
        this.subject = subject;
        this.mark = mark;
    }
}

class Student {
    constructor(firstName, lastName, marks = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.marks = marks.map(markData => new Mark(markData.subject, markData.mark));
    }

    getAverageMark() {
        if (this.marks.length === 0) return 0; 

        const total = this.marks.reduce((sum, mark) => sum + mark.mark, 0);
        return parseFloat((total / this.marks.length).toFixed(2)); // Округляем до двух знаков после запятой
  
    }

    getMarksBySubject(subject) {
        return this.marks.filter(mark => mark.subject === subject).map(mark => mark.mark);
    }

    addMark(subject, mark) {
        this.marks.push(new Mark(subject, mark));
    }

    removeMarksBySubject(subject) {
        this.marks = this.marks.filter(mark => mark.subject !== subject);
    }

    printInfo() {
        console.log(`Фамилия: ${this.lastName}`);
        console.log(`Имя: ${this.firstName}`);
        console.log("Оценки:");
        this.marks.forEach(mark => {
            console.log(` - ${mark.subject}: ${mark.mark}`);
        });
    }
}

