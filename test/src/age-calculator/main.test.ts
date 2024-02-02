
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
        
     })

    
  })
  
  
})