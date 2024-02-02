describe('age-calculator', () => {

  
  describe('execute', () => {

    
    describe('targetDate is before birthDate', () => {
  
          it.each([
         {birthDate:new Date('2024/03/04'),targetDate:new Date('2024/03/03')},
         {birthDate:new Date('2024/03/05'),targetDate:new Date('2023/03/04')},
         {birthDate:new Date('1985/03/05'),targetDate:new Date('1975/03/04')}
        ])(`The $birthDate.getFullYear() is greater than the $targetDate`,({birthDate,targetDate})=>{
  
          //arrange
          const sut = createAgeCalculator()
          const ErrorMessage ="Invalid : Target Date is before Birth Date"
  
          //act
  
          //assert
          expect(() => sut.execute(birthDate, targetDate)).toThrow(
            new Error(ErrorMessage)
          );
  
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
    
    if(birthDate>targetDate)
        throw new Error("Invalid : Target Date is before Birth Date")
    else{
      const diff = targetDate.getTime() - birthDate.getTime();
      const years = diff / (1000 * 60 * 60 * 24 * 365);

      return years

    }

  }
  
}

const createAgeCalculator=()=>{
  return new AgeCalculator()
}

interface IAgeCalculator{
   execute(birthDate:Date,targetDate:Date):number |Error
}