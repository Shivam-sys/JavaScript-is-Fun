const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, salary, title, manager) {
    super(name, salary, title, manager);
    this.employees = [];
  }
  addEmployee(employee) {
    this.employees.push(employee);
  }

  _totalSubSalary(emp) {
    let sum = 0;
    if (Array.isArray(emp))
      emp.forEach((emp) => {
        if (emp instanceof Manager) {
          return sum + this._totalSubSalary(emp);
        }
      });
    else return sum + emp.salary;
  }

  calculateBonus(multiplier) {
    const subSalary = this._totalSubSalary(this.employees);
    return multiplier * (this.salary + subSalary);
  }
}

module.exports = Manager;
