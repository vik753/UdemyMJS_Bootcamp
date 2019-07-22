// Prototypal Inheritance

/*const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
}*/

/*Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`;

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`;
    });

    return bio
}*/

/*Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
}*/

class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;

    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`;
    });

    return bio
  }
  set fullName(fullName) {
    const names = fullName.trim().split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

const me = new Person('Andrew', 'Mead', 27, ['Teaching', 'Biking'])
me.fullName= 'Alexis Turner';
// console.log(me.getBio());

const person2 = new Person('Clancey', 'Turner', 51);
// console.log(person2.getBio());


//****************Employe*******************/
class Employe extends Person {
  constructor(firstName, lastName, age, position, likes){
  super(firstName, lastName, age, likes);
    this.position = position;
  }
  getBio() {
    return `${this.fullName} is a ${this.position}.`
  }
  getYearsLeft() {
    return `${this.fullName} ${65 - this.age} years left for retire`;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const bob = new Employe('Bob', 'Barry', 44, 'Teacher', ['smoking', 'drinking']);
console.log(bob);
bob.fullName = 'Ben Milovits';
console.log(bob);
console.log(bob.getYearsLeft());

//********Student*************
class Student extends Person {
  constructor(firstName, lastName, age, grade, likes){
    super(firstName, lastName, age, likes);
    this.grade = grade;
  }
  getBio() {
    const status = this.grade >= 70 ? 'passes' : 'failed';
    return `${this.firstName} ${this.lastName} is ${status} the class. His grade is ${this.grade}.`
  }
  updateGrade(num) {
    this.grade += num;
  }
}

const student_Tom = new Student('Tom', 'Clancey', 12, 70, ['play football', 'shoot a gun']);

// console.log(student_Tom);
// console.log(student_Tom.getBio());
// student_Tom.updateGrade(-3);
// console.log(student_Tom.getBio());

// student_Tom.fullName = 'Dan Braun';

// student_Tom.updateGrade(+13);
// console.log(student_Tom.getBio());