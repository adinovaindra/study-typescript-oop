describe("Method Overriding", () => {
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string): void {
      console.log(`Hello ${name}, my name is ${this.name}`);
    }
  }

  class Manager extends Employee {
    constructor(
      private title: string,
      name: string,
    ) {
      super(name);
    }
    sayHello(name: string): void {
        super.sayHello(name)
      console.log(`Hello ${name}, my name is ${this.title} ${this.name}. I am your manager!`);
    }
  }
  it("Should support method overriding", () => {
    const employee = new Employee("Hanna");
    employee.sayHello("Pram");

    const manager = new Manager("Mr.", "Dino");
    // manager.title = "Tuan" => error karna title di private
    // console.log(manager.title); => bahkan private juga tidak bisa kita log atau tampilkan diluar Classnya
    manager.sayHello("Pram");
  });
});
