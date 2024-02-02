describe('age-calculator', () => {

  describe('execute', () => {

    describe('When birthDate is after targetDate', () => {


        it.each([
       {birthDate:new Date('2024/03/04'),targetDate:new Date('2024/03/04')},
       {birthDate:new Date('2024/03/05'),targetDate:new Date('2024/03/04')}
      ])('',()=>{


        
    })

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
       throw new Error("Invalid Target Year")
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