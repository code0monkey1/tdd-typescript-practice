import { FizBuzz, IFizzBuzz, Result } from "../../../src/fizz-buzz/main"

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


             describe('Buzz',()=>{
             
              it.each([
                {num:5},
                {num:25},
                {num:20}
              ])('when number is $num',({num})=>{
               
                      // arrange

                      const sut = getFizzBuzz()
                      const expected =Result.Buzz

                      //act

                      const actual = sut.execute(num)

                      //assert
                      expect(actual).toBe(expected)

              })
         })

          describe('FizzBuzz',()=>{
             
              it.each([
                {num:15},
                {num:60},
                {num:45}
              ])('when number is $num',({num})=>{
               
                      // arrange

                      const sut = getFizzBuzz()
                      const expected =Result.FizzBuzz

                      //act

                      const actual = sut.execute(num)

                      //assert
                      expect(actual).toBe(expected)

              })
         })
  })
  
  
})


const getFizzBuzz=():IFizzBuzz=>{

    return new FizBuzz()

}
