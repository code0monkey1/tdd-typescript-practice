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

      describe('Given two numbers , should return sum ', () => {
  
      it.each([
        {input:"1,2",expected:3},
        {input:"2,3",expected:5},
        {input:"9,1",expected:10}
    ])('input : $input , expected : $expected',({input,expected})=>{
       
      // arrange 
       const sut = createStringCalculator()
       
       // act 
       const actual = sut.add(input)
       
       // assert 
       expect(actual).toBe(expected)
  
      })
      
    })

        describe('Given many number , should return sum ', () => {
  
      it.each([
        {input:"1,2,3",expected:6},
        {input:"2,3,4",expected:9},
        {input:"9,1,10",expected:20}
    ])('input : $input , expected : $expected',({input,expected})=>{
       
      // arrange 
       const sut = createStringCalculator()
       
       // act 
       const actual = sut.add(input)
       
       // assert 
       expect(actual).toBe(expected)
  
      })
      
    })

       describe('Given numbers separated by \\n and `,` , should return sum ', () => {
  
      it.each([
        {input:"1\n2,3",expected:6},
        {input:"2,3\n4",expected:9},
        {input:"9\n1,10",expected:20}
    ])('input : $input , expected : $expected',({input,expected})=>{
       
      // arrange 
       const sut = createStringCalculator()
       
       // act 
       const actual = sut.add(input)
       
       // assert 
       expect(actual).toBe(expected)
  
      })
      
    })

    describe.skip('Custom Delimiter', () => {
          
          it.each([
            {input:"//;\n1;2",expected:3}
          ])(`input : $input , expected: $expected`,({input,expected})=>{
   
            // arrange 
            const sut = createStringCalculator()
            
            // act 
            const actual = sut.add(input)
            
            // assert 
            expect(actual).toBe(expected)

          })
    })


    it('learning test',()=>{
      const str ='//;\n1;2'
      expect(str.startsWith('//')).toBe(true)
      expect(str.indexOf('\n')).toBe(3)
      expect(str[2]).toBe(';')

      expect(str.substring(str.indexOf('\n')+1)).toBe("1;2")
    })
    
    
  })

})


const createStringCalculator=():IStringCalculator=>{

   return new StringCalculator()

}
