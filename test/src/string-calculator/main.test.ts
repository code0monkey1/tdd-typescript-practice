describe('test', () => {

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

  describe('Input has 1 digit', () => {

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

})


class StringCalculator implements IStringCalculator{
  add(input: string): number {
    
    if(input.trim()=='')  return 0
    
    return parseInt(input)
  }
  
}
interface IStringCalculator{
  add(input:string):number
}

const createStringCalculator=():IStringCalculator=>{

   return new StringCalculator()

}
