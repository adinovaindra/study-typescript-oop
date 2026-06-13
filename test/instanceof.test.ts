describe("Instance of", () => {
  class Employee {}
  class Manager {}

  const budi = new Employee();
  const dino = new Manager();

  it("Should support instance of", () => {
    expect(budi instanceof Employee).toBe(true);
    console.log(budi instanceof Employee); // true
    expect(budi instanceof Manager).toBe(false);
    console.log(budi instanceof Manager); // false

    expect(dino instanceof Employee).toBe(false);
    console.log(dino instanceof Employee); // false
    expect(dino instanceof Manager).toBe(true);
    console.log(dino instanceof Manager); // true
  });
});
