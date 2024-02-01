import { myFunction } from "../../../src/rock-paper-scissors/main"

describe('myFunction', () => {

    beforeEach(()=>{
        jest.clearAllMocks()
       
    })

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
