describe('age-calculator', () => {

  
  describe('execute', () => {

    
    describe('BirthDate is after the TargetDate', () => {
  
          it.each([
         {birthDate:'2024/03/04',targetDate:'2024/03/03'},
         {birthDate:'2024/03/05',targetDate:'2023/03/04'},
         {birthDate:'1985/03/05',targetDate:'1975/03/04'}
        ])(`The $birthDate is greater than the $targetDate`,({birthDate,targetDate})=>{
  
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
        ])('$birthDate $targetDate',({birthDate,targetDate})=>{
            
        //arrange
        const sut = createAgeCalculator()
  
        const expected=0
     
        //act
        const actual = sut.execute(new Date(birthDate),new Date(targetDate) )
        
        //assert
        expect(actual).toBe(expected)
        
        })
  
      })
      
      describe('BirthDate is less than TargetDate', () => {

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
          ])('birthDate : $birthDate is less  than targetDate : $targetDate',({birthDate,targetDate,expected})=>{

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