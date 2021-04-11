// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
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
