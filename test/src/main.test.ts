import { myFunction } from "../../src/main"




describe('myFunction', () => {
    it('returns string `a`',()=>{
       
        //arrange
        const sut = myFunction
        
        let expected ='a'
        
        // execute
        let actual = sut()
        
        // assert
        expect(actual).toBe(expected)

    })
  
})
