// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");
class Manager extends Employee {
  constructor(name, id, email) {
    name = this.name;
    id = this.id;
    email = this.email;
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
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
