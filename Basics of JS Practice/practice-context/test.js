const Employee = require("./employee");

const emp = new Employee("John Wick", "Dog Lover");

setTimeout(emp.sayName.bind(emp), 2000);

setTimeout(emp.sayOccupation.bind(emp), 3000);
