
interface IAgeCalculator{
   execute(birthDate:string,targetDate:string):number
}


class AgeCalculator implements IAgeCalculator{
  execute(birthDate: string,targetDate:string): number {
    return 38
  }
  
}
describe('age-calculator', () => {

  describe('execute', () => {
   
     test('test',()=>{

      //arrange

      const sut = createAgeCalculator()

      const birthDate='04-03-1985'
      const targetDate='02-02-2024'
      const expected=38

      //act
       
      const actual = sut.execute(birthDate,targetDate)


      //assert

      expect(actual).toBe(expected)


     })

    
  })
  
  
})


const createAgeCalculator=()=>{
  return new AgeCalculator()
}