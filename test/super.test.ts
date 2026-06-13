describe("Super", () => {
  class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Employee extends Person {
    department: string;

    constructor(name: string, department: string) {
      super(name);
      this.department = department;
    }
  }

  it("Should support super", () => {
    const employee = new Employee("Dino", "Tech");
    console.log(employee.name);
    console.log(employee.department);
  });
});
