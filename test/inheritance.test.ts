describe("Class inheritance", () => {
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Manager extends Employee {}

  class Director extends Manager {}

  it("Should support inheritance", () => {
    const employee = new Employee("Eko");
    console.log(employee.name);

    const manager = new Manager("Adinova");
    console.log(manager.name);

    const director = new Director("Hanna");
    console.log(director.name);
  });
});
