import { myFunction } from "../../src/main"

const sut = myFunction


describe('myFunction', () => {
    it('returns string `a`',()=>{
        
        let actual = sut()
        let expected ='a'
    
        expect(actual).toBe(expected)
    })
  
})
