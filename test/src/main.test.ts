import { myFunction } from "../../src/main"

const sut = myFunction


describe('myFunction', () => {
    it('returns string `a`',()=>{
        let result = sut()
    
        expect(result).toBe('a')
    })
  
})
