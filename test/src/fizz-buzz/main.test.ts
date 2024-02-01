import { FizzBuzz, Result } from "../../../src/fizz-buzz/main"



describe('fizz-Buzz', () => {

  describe('execute', () => {
      
         describe('Fizz',()=>{
             
              it.each([
                {num:3},
                {num:9},
                {num:27}
              ])('when number is $num',({num})=>{
               
                      // arrange

                      const sut = getFizzBuzz()
                      const expected =Result.Fizz

                      //act

                      const actual = sut.execute(num)

                      //assert
                      expect(actual).toBe(expected)

              })
         })
  })
  
  
})


const getFizzBuzz=():FizzBuzz=>{

    const sut:FizzBuzz={
      execute: function (n: number): Result {

         if( n%3 == 0)
           return Result.Fizz

         return Result.Buzz
      }
    }

    return sut
}
