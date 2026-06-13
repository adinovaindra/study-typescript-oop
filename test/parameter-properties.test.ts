describe("Parameter Properties", () => {

    class Person {
        constructor(public firstName:string = "Dino") {
        }
    }
    it("Should support parameter properties", () => {
        const person = new Person("Adinova")

        console.log(person.firstName)
    })
})