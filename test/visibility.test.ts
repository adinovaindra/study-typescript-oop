describe("Visibility", () => {
  class Counter {
    protected counter: number = 0;

    counterIncrement() {
      this.counter++;
    }

    getCounter(): number {
      return this.counter;
    }
  }

  class DoubleCounter extends Counter {
    counterIncrement(): void {
      this.counter += 2;
    }

    getCounter(): number {
      return this.counter;
    }
  }

  it("Should allow visibility options", () => {
    const counter = new Counter();

    counter.counterIncrement();
    console.log(counter.getCounter());

    const doubleCounter = new DoubleCounter()

    doubleCounter.counterIncrement()
    console.log(doubleCounter.getCounter());
    
  });
});
