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
      {input:"1"},
      {input:"2"},
      {input:"9"}
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
  
  
})

interface IStringCalculator{
  add(input:string):number
}

class StringCalculator implements IStringCalculator{
  add(input: string): number {

    if(input.trim()=='')  return 0

    return 1
  }

}

const createStringCalculator=():IStringCalculator=>{

   return new StringCalculator()

}
