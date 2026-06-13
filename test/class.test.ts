describe("Class", () => {
  class Customer {
    constructor() {
        console.log("Create new customer!")
    }
  }

  class Order {}

  it("Should can create class", () => {
    const customer: Customer = new Customer();
    const order = new Order();
  });

  it("Should can create constructor", () => {
    new Customer()
    new Customer()
  })
});
