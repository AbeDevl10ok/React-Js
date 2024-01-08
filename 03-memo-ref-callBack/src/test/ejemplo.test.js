import {describe,expect,it} from "vitest"
const suma=(a,b)=>{
    return a+b
}
describe("primer test",()=>{
    it("si suma correctamente",()=>{
        expect(suma(1,1)).toBe(2)
    })
})