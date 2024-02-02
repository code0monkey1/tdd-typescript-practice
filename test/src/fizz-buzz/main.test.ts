import { FizBuzz, IFizzBuzz, Result } from "../../../src/fizz-buzz/main"

describe('fizz-Buzz', () => {

  describe('execute', () => {
      
         describe('Fizz',()=>{
             
              it.each([
                {input:9},
                {input:27},
                {input:6}
              ])('when number is $input',({input})=>{
               
                      // arrange
                      const sut = createFizzBuzz()
                      const expected = Result.Fizz

                      //act
                      const actual = sut.execute(input)

                      //assert
                      expect(actual).toBe(expected)

              })
         })


             describe('Buzz',()=>{
             
              it.each([
                {num:25},
                {num:20}
              ])('when number is $num',({num})=>{
               
                      // arrange

                      const sut = createFizzBuzz()
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

                      const sut = createFizzBuzz()
                      const expected =Result.FizzBuzz

                      //act

                      const actual = sut.execute(num)

                      //assert
                      expect(actual).toBe(expected)

              })
         })

         describe('String of number', () => {
              
                 it.each([
                {num:8,res:'8'},
                {num:28,res:'28'},
                {num:56,res:'56'}
              ])('when number is $num',({num,res})=>{
               
                      // arrange

                      const sut = createFizzBuzz()
                      const expected=res

                      //act

                      const actual = sut.execute(num)

                      //assert
                      expect(actual).toBe(expected)

              })

         })


           describe('Wizz ( prime number)', () => {
              
                 it.each([
                {input:2,},
                {input:7},
                {input:11}
              ])('when number is $input',({input})=>{
               
                      // arrange

                      const sut = createFizzBuzz()
                      const expected=Result.Wizz

                      //act

                      const actual = sut.execute(input)

                      //assert
                      expect(actual).toBe(expected)

              })

         })

            describe('WizzFizz', () => {
              
                 it.each([
                {input:3},
              
              ])('when number is $input',({input})=>{
               
                      // arrange

                      const sut = createFizzBuzz()
                      const expected=Result.WizzFizz

                      //act

                      const actual = sut.execute(input)

                      //assert
                      expect(actual).toBe(expected)

              })

         })

            describe('WizzBuzz', () => {
              
                 it.each([
                {input:5},
               
              ])('when number is $input',({input})=>{
               
                      // arrange

                      const sut = createFizzBuzz()
                      const expected=Result.WizzBuzz

                      //act

                      const actual = sut.execute(input)

                      //assert
                      expect(actual).toBe(expected)

              })

            
           
         })
         
  })
  
  
})


const createFizzBuzz=():IFizzBuzz=>{

    return new FizBuzz()

}
