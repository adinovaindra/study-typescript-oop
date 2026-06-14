describe("Error Handling", () => {
  class ValidationError extends Error {
    constructor(message: string) {
      super(message);
    }
  }

  function multiplyNumber(value: number): number {
    if (value < 0) {
      throw new ValidationError("Value can not be less than 0");
    }
    return value * 2;
  }

  it("Should support error handling", () => {
    try {
      const result = multiplyNumber(-2);
      console.log(result);
    } catch (error) {
      if (error instanceof ValidationError) {
        console.log(error.message);
      }
    }
  });
});
