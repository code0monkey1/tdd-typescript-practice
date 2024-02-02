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
      
      describe('BirthDate has not yet passed ', () => {

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

      describe('BirthDate is on 29th of February of a LeapYear', () => {
         
        describe('BirthDay has Passed', () => {
          it.each([
            {
              birthDate:'2000/02/29', 
              targetDate:'2024/03/04',
              expected:6
            },
              {
              birthDate:'2004/02/29', 
              targetDate:'2024/03/17',
              expected:5
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

        describe('BirthDay has not yet Passed', () => {
          it.each([
            {
              birthDate:'2000/02/29', 
              targetDate:'2024/02/04',
              expected:5
            },
              {
              birthDate:'2004/02/29', 
              targetDate:'2024/02/17',
              expected:4
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
        
        describe('BirthDate has passed ', () => {

          it.each([
            {
              birthDate:'1985/03/04', 
              targetDate:'2024/03/04',
              expected:39
            },
              {
              birthDate:'1989/02/16', 
              targetDate:'2024/02/17',
              expected:35
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
    
    const ms = targetDate.getTime() - birthDate.getTime();
    
    let  years = this.getYears(ms) ;

    if( this.isLeapDay(birthDate))
       years= years/ 4

    return Math.floor( years)

  }

  private isLeapDay(birthDate: Date) {
    return this.isLeapYear(birthDate.getFullYear()) &&
      birthDate.getDate() == 29 &&
      birthDate.getMonth() + 1 == 2
  }

  private getYears(ms:number){
   return  ms / (1000 * 60 * 60 * 24 * 365) 
  }

 private isLeapYear(year:number) {
      if (year % 4 === 0) {
        if (year % 100 === 0) {
          if (year % 400 === 0) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      } else {
        return false;
      }
  }

  
}

const createAgeCalculator=()=>{
  return new AgeCalculator()
}

interface IAgeCalculator{
   execute(birthDate:Date,targetDate:Date):number |Error
}