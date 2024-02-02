describe('age-calculator', () => {

  
  describe('execute', () => {

    
    describe('TargetDate is earlier than BirthDate', () => {
  
          it.each([
         {birthDate:'2024/03/04',targetDate:'2024/03/03'},
         {birthDate:'2024/03/05',targetDate:'2023/03/04'},
         {birthDate:'1985/03/05',targetDate:'1975/03/04'}
        ])(`The $birthDate is greater than the $targetDate ,throws Error("Invalid : Target Date is before Birth Date")`,({birthDate,targetDate})=>{
  
          //arrange
          const sut = createAgeCalculator()
          const ErrorMessage ="Invalid : Target Date is before Birth Date"
  
          //act
  
          //assert
          expect(() => sut.execute(new Date(birthDate), new Date(targetDate))).toThrow(
            new Error(ErrorMessage)
          );
  
      })

    })
    

      
      describe('BirthDate is equal to TargetDate', () => {
        
        it.each([
         {birthDate:'2024/03/04',targetDate:'2024/03/04'},
         {birthDate:'2024/03/05',targetDate:'2024/03/05'}
        ])('birthDate : $birthDate deathDate: $targetDate , the age is : 0',({birthDate,targetDate})=>{
            
        //arrange
        const sut = createAgeCalculator()
  
        const expected=0
     
        //act
        const actual = sut.execute(new Date(birthDate),new Date(targetDate) )
        
        //assert
        expect(actual).toBe(expected)
        
        })
  
      })
      
      describe('BirthDate has not yet passed in the current year ', () => {

          it.each([
            {
              birthDate:'1985/03/04', 
              targetDate:'2024/02/02',
              expected:38
            },
              {
              birthDate:'1989/02/16', 
              targetDate:'2024/02/02',
              expected:34
            }
          ])('birthDate : $birthDate is less  than targetDate : $targetDate , the age is : $expected',({birthDate,targetDate,expected})=>{

            //arrange
            const sut = createAgeCalculator()
         
            //act
             
            const actual = sut.execute(new Date(birthDate),new Date(targetDate))
            
            //assert
            expect(actual).toBe(expected)

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