describe("Properties", () => {
  class Customer {
    readonly id: number;
    name: string = "Guest";
    age?: number;

    constructor(id: number, name: string) {
      this.id = id;
        this.name = name;
    }

    sayHello(name: string): void {
        console.log(`Hello ${name}, my name is ${this.name}`);
    }
  }
  it("Should can have properties", () => {
    const customer = new Customer(1, "Adinova");
    customer.age = 20;

    console.log(customer.id);
    console.log(customer.name);
    console.log(customer.age);

    console.log(customer);
  });

  it("Should can have a method", () => {
    const customer = new Customer(1, "Adinova")
    customer.sayHello("David")
  })
});
