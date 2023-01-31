const Person = require("./person");

class Student extends Person {
  constructor(firstName, lastName, major, gpa) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = gpa;
  }
  static compareGPA(firstStudent, secondStudent) {
    if (firstStudent.GPA === secondStudent.GPA) {
      return "Both students have the same GPA";
    }
    return firstStudent.GPA > secondStudent.GPA
      ? `${firstStudent.firstName} ${firstStudent.lastName} has the higher GPA.`
      : `${secondStudent.firstName} ${secondStudent.lastName} has the higher GPA.`;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
