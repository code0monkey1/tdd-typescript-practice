describe('test', () => {

  describe('Input is blank', () => {
    
    it.each([
     {input:''},
     {input:'   '},
     {input:'  '}
   ])('input : $input',({input})=>{
        
     // arrange 
     const sut = createStringCalculator()
  
     const expected = 0
     
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
  ])('input : $input',({input,expected})=>{
     
    // arrange 
     const sut = createStringCalculator()

     
     // act 
     const actual = sut.add(input)
     
     // assert 
     expect(actual).toBe(expected)

    })
    
  })
  
  
})

interface IStringCalculator{
  add(input:string):number
}

class StringCalculator implements IStringCalculator{
  add(input: string): number {

    if(input.trim()=='')  return 0

    return Number(input)
  }

}

const createStringCalculator=():IStringCalculator=>{

   return new StringCalculator()

}