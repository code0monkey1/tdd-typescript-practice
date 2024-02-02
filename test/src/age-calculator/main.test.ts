describe('age-calculator', () => {

  
  describe('execute', () => {

    
    describe('Invalid Dates', () => {
  
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
    
    describe('Valid Dates',()=>{
      
      describe('BirthDate is equal to TargetDate', () => {
        
        it.each([
         {birthDate:new Date('2024/03/04'),targetDate:new Date('2024/03/04')},
         {birthDate:new Date('2024/03/05'),targetDate:new Date('2024/03/05')}
        ])('$birthDate $targetDate',({birthDate,targetDate})=>{
            
        //arrange
        const sut = createAgeCalculator()
  
        const expected=0
     
        //act
        const actual = sut.execute(birthDate,targetDate)
        
        //assert
        expect(actual).toBe(expected)
        
        })
  
      })
      
      describe('Birth Date is less than Target Date', () => {

          it.each([
            {
              birthDate:new Date('1985/03/04'), 
              targetDate:new Date('2024/02/02'),
              expected:38
            },
              {
              birthDate:new Date('1989/02/16'), 
              targetDate:new Date('2024/02/02'),
              expected:34
            }
          ])('birthDate : $birthDate is less  than targetDate : $targetDate',({birthDate,targetDate,expected})=>{

            //arrange
            const sut = createAgeCalculator()
         
            //act
             
            const actual = sut.execute(birthDate,targetDate)
            
            //assert
            expect(actual).toBe(expected)

          })
      })



     })
 
  })
  
})


class AgeCalculator implements IAgeCalculator{
  execute(birthDate: Date,targetDate:Date): number |Error {
    
    if(birthDate>targetDate)
        throw new Error("Invalid : Target Date is before Birth Date")

    
   
    const diff = targetDate.getTime() - birthDate.getTime();

    const years = Math.floor( diff / (1000 * 60 * 60 * 24 * 365) );

    return years

  }
  
}

const createAgeCalculator=()=>{
  return new AgeCalculator()
}

interface IAgeCalculator{
   execute(birthDate:Date,targetDate:Date):number |Error
}