
interface IAgeCalculator{
   execute(birthDate:string,targetDate:string):number
}


class AgeCalculator implements IAgeCalculator{
  execute(birthDate: string,targetDate:string): number {
    throw new Error("Method not implemented.")
  }
  
}
describe('age-calculator', () => {

  describe('execute', () => {
   
     test('',()=>{

      //arrange

      const sut = createAgeCalculator()

      //act

      const result = sut.execute('04-03-1985','02-02-2024')

      //assert
        
     })

    
  })
  
  
})


const createAgeCalculator=()=>{
  return new AgeCalculator()
}