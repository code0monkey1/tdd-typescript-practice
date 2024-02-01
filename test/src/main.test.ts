import { myFunction } from "../../src/main"

describe('myFunction', () => {
    it('returns string `a`',()=>{
       
        //arrange
        const sut = myFunction
        
        let expected ='a'
        
        // act
        let actual = sut()
        
        // assert
        expect(actual).toBe(expected)

    })
  
})
