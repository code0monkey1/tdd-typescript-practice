import { FizzBuzz, Result } from "../../../src/fizz-buzz/main"



describe('fizz-Buzz', () => {

  describe('execute', () => {
      
         describe('Fizz',()=>{
             
              it.each([
                {num:3},
                {num:9},
                {num:27}
              ])('when number is multiple of 3',()=>{
               
                     

              })
         })
  })
  
  
})


const getFizzBuzz=():FizzBuzz=>{

    const sut:FizzBuzz={
      execute: function (n: Number): Result {
        throw new Error("Function not implemented.")
      }
    }


    return sut
}
