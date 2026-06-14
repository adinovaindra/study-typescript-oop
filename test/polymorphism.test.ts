describe("Polymorphism", () => {
  class Employee {
    constructor(
      public name: string,
      public job: string = "Staff",
    ) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  function sayHello(employee: Employee): void {
    if (employee instanceof VicePresident) {
      const vicePresident = employee as VicePresident;
      console.log(`Hello vice president ${vicePresident.name}. Your role is a ${vicePresident.job}`);
    } else if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.log(`Hello manager ${manager.name}. Your role is a ${manager.job}`);
    } else {
      console.log(`Hello ${employee.name}. Your role is a ${employee.job}`);
    }
  }

  it("Should support polymorphism", () => {
    let employee = new Employee("Dino");
    console.log(employee);

    employee = new Manager("Dino");
    console.log(employee);

    employee = new VicePresident("Dino");
    console.log(employee);

    sayHello(new Employee("Dino"));
    sayHello(new Manager("Dino", "Manager"));
    sayHello(new VicePresident("Dino", "Vice Fuckin President"));
  });
});
