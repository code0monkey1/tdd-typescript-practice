import { IStringCalculator, StringCalculator } from "../../../src/string-calculator/main"

describe('string-calculator', () => {

  describe('add', () => {
    describe('Input is blank', () => {
      
      it.each([
       {input:'' ,expected:0},
       {input:'   ',expected:0},
       {input:'  ',expected:0}
     ])('input : $input , expected : $expected',({input,expected})=>{
          
       // arrange 
       const sut = createStringCalculator()
  
       // act 
       const actual = sut.add(input)
       
       // assert 
       expect(actual).toBe(expected)
    
      })
       
    })
  
    describe('Given single number , should return that number', () => {
  
      it.each([
        {input:"1",expected:1},
        {input:"2",expected:2},
        {input:"9",expected:9}
    ])('input : $input , expected : $expected',({input,expected})=>{
       
      // arrange 
       const sut = createStringCalculator()
       
       // act 
       const actual = sut.add(input)
       
       // assert 
       expect(actual).toBe(expected)
  
      })
      
    })

      describe('Given 2 csv (numbers) , should return sum ', () => {
  
      it.each([
        {input:"1,2",expected:3},
        // {input:"2,3",expected:5},
        // {input:"9,1",expected:10}
    ])('input : $input , expected : $expected',({input,expected})=>{
       
      // arrange 
       const sut = createStringCalculator()
       
       // act 
       const actual = sut.add(input)
       
       // assert 
       expect(actual).toBe(expected)
  
      })
      
    })
    
  })
  


})



const createStringCalculator=():IStringCalculator=>{

   return new StringCalculator()

}
