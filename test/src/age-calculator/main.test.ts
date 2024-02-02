

describe('age-calculator', () => {

  describe('execute', () => {
   
     test('test',()=>{

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
interface IAgeCalculator{
   execute(birthDate:Date,targetDate:Date):number
}


class AgeCalculator implements IAgeCalculator{
  execute(birthDate: Date,targetDate:Date): number {
    return 38
  }
  
}

const createAgeCalculator=()=>{
  return new AgeCalculator()
}