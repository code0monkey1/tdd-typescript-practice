describe('test', () => {

   it.each([
    {input:''},{input:'   '},{input:'  '}
  ])(' input : $input',({input})=>{
       
    // arrange 
    const sut = createStringCalculator()

    const expected = 0
    
    // act 
    const actual = sut.add(input)
    
    // assert 
    expect(actual).toBe(expected)


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
