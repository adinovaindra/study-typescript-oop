describe("Static", () => {
  class Configuration {
    static NAME: string = "Belajar TypeScript OOP";
    static VERSION: number = 1.0;
    static AUTHOR: string = "Adinova Indra Permana";
  }

  class MathUtil {
    static sum(...values: number[]): number {
      let total = 0;
      for (const num of values) {
        total += num;
      }
      return total;
    }
  }
  it("Should support static class", () => {
    console.log(Configuration.NAME);
    console.log(Configuration.VERSION);
    console.log(Configuration.AUTHOR);

    console.log(MathUtil.sum(1,2,3,4,5))
    
  });
});
