describe('age-calculator', () => {

  describe('execute', () => {
    
    describe('BirthYear and Target year are the same ', () => {
      
      it.each([
       {birthDate:new Date('2024/03/04'),targetDate:new Date('2024/03/04')}])('',()=>{
          
        //arrange
        


        //act 

        //assert
  
      })

    })
    
   
     it.skip('test',()=>{

      //arrange

      const sut = createAgeCalculator()

      const birthDate=new Date('1985/03/04')
      const targetDate=new Date('2024/02/02')

      const expected=38

      //act
       
      const actual = sut.execute(birthDate,targetDate)

      //assert
      expect(actual).toBe(expected)

     })

    
  })
  
  
})


class AgeCalculator implements IAgeCalculator{
  execute(birthDate: Date,targetDate:Date): number {
    return 38
  }
  
}

const createAgeCalculator=()=>{
  return new AgeCalculator()
}

interface IAgeCalculator{
   execute(birthDate:Date,targetDate:Date):number
}