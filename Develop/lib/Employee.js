// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email, role) {
    name = this.name;
    id = this.id;
    email = this.email;
    role = this.role;
  }

  getName() {
    return $(this.name);
  }

  getId() {
    return $(this.id);
  }
  getEmail() {
    return $(this.email);
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
