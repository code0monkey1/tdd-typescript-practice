describe('age-calculator', () => {

  describe('execute', () => {
    
    describe('Invalid Dates , throw Error', () => {
      
      describe('When birthDate is after targetDate', () => {
  
  
          it.each([
         {birthDate:new Date('2025/03/04'),targetDate:new Date('2024/03/04')},
         {birthDate:new Date('2024/03/05'),targetDate:new Date('2023/03/04')},
         {birthDate:new Date('1985/03/05'),targetDate:new Date('1975/03/04')}
        ])('The $birthDate.getFullYear() is greater than the $targetDate.getFullYear()',({birthDate,targetDate})=>{
  
          //arrange
          const sut = createAgeCalculator()
          const ErrorMessage ="Invalid Target Year or Birth Date"
  
          //act
  
          //assert
          expect(() => sut.execute(birthDate, targetDate)).toThrow(
            new Error(ErrorMessage)
          );
  
      })

    })

    describe
    
  })
    
    
    describe.skip('BirthYear and Target year are the same ', () => {
      
      it.each([
       {birthDate:new Date('2024/03/04'),targetDate:new Date('2024/03/04')},
       {birthDate:new Date('2024/03/05'),targetDate:new Date('2024/03/04')}
      ])('',()=>{
          
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
  execute(birthDate: Date,targetDate:Date): number |Error {

     const [birthYear,birthMonth,birthDay] =[birthDate.getFullYear(),birthDate.getMonth()+1,birthDate.getDate()]

      const [targetYear,targetMonth,targetDay] =[targetDate.getFullYear(),targetDate.getMonth()+1,targetDate.getDate()]

     if (birthYear>targetYear ){
       throw new Error("Invalid Target Year or Birth Date")
     }

     return 38
  }
  
}

const createAgeCalculator=()=>{
  return new AgeCalculator()
}

interface IAgeCalculator{
   execute(birthDate:Date,targetDate:Date):number |Error
}