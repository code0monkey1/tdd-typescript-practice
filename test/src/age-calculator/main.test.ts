
interface IAgeCalculator{
   execute(birthDate:string):number
}


class AgeCalculator implements IAgeCalculator{
  execute(birthDate: string): number {
    throw new Error("Method not implemented.")
  }
  
}
describe('age-calculator', () => {

  describe('execute', () => {
   
     test('',()=>{
      
     })

    
  })
  
  
})