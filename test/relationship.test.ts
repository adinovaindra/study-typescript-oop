describe("Relationship", () => {
  class Person {
    constructor(public name: string) {
      
    }
  }

  class Customer {
    constructor(public name: string) {}
  }

  const person: Person = new Customer("Adinova");

  it("Should support relationship", () => {
    console.log(person);
    console.log(person.name);
  });
});