// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");
class Manager extends Employee {
  constructor(name, id, email) {
    name = this.name;
    id = this.id;
    email = this.email;
    officeNumber = this.officeNumber;
  }
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getOfficeNumber() {
    return this.OfficeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
