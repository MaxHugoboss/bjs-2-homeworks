function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

const studet1 = new Student('Анатолий', 'мужской', 24);
const studet2 = new Student('Арина', 'женский', 23);
const studet3 = new Student('Николай', 'мужской', 22);

Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
};

Student.prototype.addMarks = function(...marksToAdd) {
    if (this.marks) {
        this.marks.push(...marksToAdd);
        console.log(`Оценки добавлены: ${marksToAdd.join(', ')}`);
    } else {
        console.log('Студент отчислен. Добавление оценок невозможно.');
    }
};

Student.prototype.getAverage = function() {
    if (this.marks && this.marks.length > 0) {
      const sum = this.marks.reduce((total, mark) => total + mark, 0);
      return sum / this.marks.length;
    } else {
      console.log('Нет оценок или студент отчислен. Среднее арифметическое равно 0.');
      return 0;
    }
};

  Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
    console.log(`Студент исключен. Причина: ${reason}`);
};
