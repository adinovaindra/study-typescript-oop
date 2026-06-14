describe("Abstract Class", () => {
  abstract class Customer {
    readonly id: number;
    abstract name: string;

    constructor(id: number) {
      this.id = id;
    }

    hello() {
      console.log("Hello");
    }

    abstract sayHello(name: string): void;
  }

  class RegularCustomer extends Customer {
    constructor(
      id: number,
      public name: string,
    ) {
      super(id);
    }

    sayHello(name: string): void {
      console.log(`Hello ${name}, my name is ${this.name}. my ID is ${this.id}`);
    }
  }

  it("Should support abstract", () => {

    const customer = new RegularCustomer(1, "Adinova")

    console.log(customer)
    customer.sayHello("Michael");
    customer.hello()
    
  });
});
