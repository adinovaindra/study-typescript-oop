import { MathUtil } from "../src/math-util"

describe("Namespace", () => {
    it("Should support namespace", () => {
        console.log(MathUtil.PI);
        console.log(MathUtil.sum(1,2,3,4,5));
        
    })
})