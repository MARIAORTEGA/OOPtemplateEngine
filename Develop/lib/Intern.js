// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");
class Intern extends Employee {
  constructor(name, id, email) {
    name = this.name;
    id = this.id;
    email = this.email;
    school = this.school;
  }
  getName() {
    return this.name;
  }

  getId() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
