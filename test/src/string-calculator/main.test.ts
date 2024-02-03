import { IStringCalculator, StringCalculator } from "../../../src/string-calculator/main"

describe('string-calculator', () => {

  describe('add', () => {
    describe('Input is blank', () => {
      
      it.each([
       {input:'' ,expected:0},
       {input:'   ',expected:0},
       {input:'  ',expected:0}
     ])('input : $input , expected : $expected',({input,expected})=>{
          
       // arrange 
       const sut = createStringCalculator()
  
       // act 
       const actual = sut.add(input)
       
       // assert 
       expect(actual).toBe(expected)
    
      })
       
    })
  
    describe('Given single number , should return that number', () => {
  
      it.each([
        {input:"1",expected:1},
        {input:"2",expected:2},
        {input:"9",expected:9}
    ])('input : $input , expected : $expected',({input,expected})=>{
       
      // arrange 
       const sut = createStringCalculator()
       
       // act 
       const actual = sut.add(input)
       
       // assert 
       expect(actual).toBe(expected)
  
      })
      
    })

      describe('Given two numbers , should return sum ', () => {
  
      it.each([
        {input:"1,2",expected:3},
        {input:"2,3",expected:5},
        {input:"9,1",expected:10}
    ])('input : $input , expected : $expected',({input,expected})=>{
       
      // arrange 
       const sut = createStringCalculator()
       
       // act 
       const actual = sut.add(input)
       
       // assert 
       expect(actual).toBe(expected)
  
      })
      
    })

        describe('Given many number , should return sum ', () => {
  
      it.each([
        {input:"1,2,3",expected:6},
        {input:"2,3,4",expected:9},
        {input:"9,1,10",expected:20}
    ])('input : $input , expected : $expected',({input,expected})=>{
       
      // arrange 
       const sut = createStringCalculator()
       
       // act 
       const actual = sut.add(input)
       
       // assert 
       expect(actual).toBe(expected)
  
      })
      
    })

       describe('Given numbers separated by \\n and `,` , should return sum ', () => {
  
      it.each([
        {input:"1\n2,3",expected:6},
        {input:"2,3\n4",expected:9},
        {input:"9\n1,10",expected:20}
    ])('input : $input , expected : $expected',({input,expected})=>{
       
      // arrange 
       const sut = createStringCalculator()
       
       // act 
       const actual = sut.add(input)
       
       // assert 
       expect(actual).toBe(expected)
  
      })
      
    })

    describe('Custom Delimiter', () => {
          
          it.each([
            {input:"//;\n1;2",expected:3},
            {input:"//,\n1,4",expected:5},
            {input:"//@\n1@7",expected:8}
         
          ])(`input : $input , expected: $expected`,({input,expected})=>{
   
            // arrange 
            const sut = createStringCalculator()
            
            // act 
            const actual = sut.add(input)
            
            // assert 
            expect(actual).toBe(expected)

          })
    })

    describe('Throws on negative numbers', () => {
           it.each([
            {input:"//;\n1;-2",expected:"negatives not allowed : -2"},
            {input:"-1,4" ,expected:"negatives not allowed : -1"},
            {input:"-1,-20",expected:"negatives not allowed : -1,-20"},
            {input:"//@\n-1@7",expected:"negatives not allowed : -1"},
             {input:"//@\n-1@-999",expected:"negatives not allowed : -1,-999"}
         
          ])(`input : $input , throws : $expected`,({input ,expected})=>{
   
            // arrange 
            const sut = createStringCalculator()
            
            // act 
            // assert 
            expect(()=>sut.add(input)).toThrow(expected)

          })
    })

    describe('Discount all values above 1000',()=>{

          it.each([
            {input:"1001",expected:0},
            {input:"1001,1",expected:1},
            {input:"1000,1",expected:1001},
            {input:"//,\n5,4000",expected:5},
            {input:"//@\n1002@7",expected:7}     
          ])(`input : $input , expected: $expected`,({input,expected})=>{
   
            // arrange 
            const sut = createStringCalculator()
            
            // act 
            const actual = sut.add(input)
            
            // assert 
            expect(actual).toBe(expected)

          })
    })

     describe('Multiple Delimiters',()=>{

          it.each([
            {input:"//[***]\n1***2***3",expected:6},
            {input:"//[???]\n2???4???8",expected:14},
            {input:"//[,]\n2,4,8",expected:14},
      
          ])(`input : $input , expected: $expected`,({input,expected})=>{
   
            // arrange 
            const sut = createStringCalculator()
            
            // act 
            const actual = sut.add(input)
            
            // assert 
            expect(actual).toBe(expected)

          }) 
    })

    describe('Array of Multiple Delimiters', () => {
           
         it.each([
            {input:"//[***][',]\n1***2,3",expected:6},
            // {input:"//[???]\n2???4???8",expected:14},
            // {input:"//[,]\n2,4,8",expected:14},
      
          ])(`input : $input , expected: $expected`,({input,expected})=>{
   
            // arrange 
            const sut = createStringCalculator()
            
            // act 
            const actual = sut.add(input)
            
            // assert 
            expect(actual).toBe(expected)

          }) 

      
    })
    

    it.only('learning test',()=>{

      let res:string[]=[]
      let  str="//[***][',]\n1***2,3"
  
      while(str.indexOf('[')){
          const extractedToken = str.substring(str.indexOf('[')+1,str.indexOf(']'))
         
          res.push(extractedToken)
          
          str=str.slice(str.indexOf(']')+1)
        }
      
       expect(res).toBe([1,2,3])
    })
    
  })

})


const createStringCalculator=():IStringCalculator=>{

   return new StringCalculator()

}
