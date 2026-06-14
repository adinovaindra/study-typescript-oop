export namespace MathUtil {
  export const PI = 3.14;

  export function sum(...values: number[]): number {
    let total = 0;
    for (const num of values) {
      total += num;
    }
    return total;
  }
}
