import { CharacterCopier, IDestination, ISource } from '../../../src/character-copier/main';

describe.skip('copy', () => {

  describe('no character', () => {

      it('has no input, followed by a newline',()=>{
        
        //arrange 
        
        let actual:string[] = []

 
        const src=  createMockSource([])
        const dst= createMockDestination()
         
        const sut = createCharacterCopier(src,dst)
        
        //act 
  
        sut.copy()

        //assert

        expect(dst.writeChar).toHaveBeenCalledTimes(0)

        expect(actual).toStrictEqual([])

      })

  })

  describe('one character', () => {

      it.each([
        {input:'a'},
        {input:'b'}
      ])('$input followed by a newline',({input})=>{
        
        //arrange 
        
        const src=  createMockSource([input])
        const dst= createMockDestination()
         
        const sut = createCharacterCopier(src,dst)
        //act 
  
        sut.copy()

        //assert

        expect(dst.writeChar).toHaveBeenCalledWith(input)

        expect(dst.getWrittenChars()).toContain(input)

      })

  })

  describe('characters after newline should not be written', () => {

      it.each([
        {
          chars:['a','b','c','\n','d','e','f'],
          expected:['a','b','c'] , 
         discounted:['d','e','f']
      },
        {
          chars: ['d','e','f','\n','a','b','c'],
          expected:['d','e','f',] , 
          discounted:['a','b','c']
        }
      ])('expect:$expected and discount: $discount, which come after newline',({chars,expected,discounted})=>{
        
       //arrange 
        
        const src=  createMockSource(chars)

        const dst= createMockDestination()
         
        const sut = createCharacterCopier(src,dst)

        //act 
  
        sut.copy()

        //assert

        expected.map(e =>  expect(dst.writeChar).toHaveBeenCalledWith(e))

        discounted.map( d=> expect(dst.writeChar).not.toHaveBeenCalledWith(d) )
       
        expect(dst.getWrittenChars()).toStrictEqual(expected)

      })

  })


   describe('multiple characters copied in the same order', () => {

      it.each([
        {chars:['a','b','c']},
        {chars: ['d','e','f']}
      ])('$input followed by a newline',({chars})=>{
        
        
       //arrange 
        
        const src=  createMockSource(chars)
        const dst= createMockDestination()
         
        const sut = createCharacterCopier(src,dst)
        //act 
  
        sut.copy()

        //assert

        chars.map(c=> expect(dst.writeChar).toHaveBeenCalledWith(c))
       
        expect(dst.getWrittenChars()).toStrictEqual(chars)

      })

  })
  
  function createMockSource(chars:string[]){
        
      const mockReadChar = jest.fn()

      chars.map(c => mockReadChar.mockReturnValueOnce(c))

      mockReadChar.mockReturnValue('\n')

      return {
         readChar:mockReadChar
      }
      
  }

  function createMockDestination(){

     const writtenChars:string[]=[]

     return {
        writeChar:jest.fn((c:string)=>{writtenChars.push(c)}),
        getWrittenChars:()=>writtenChars
     }
  }

  function createCharacterCopier(mockSource:ISource,mockDestination:IDestination){

       return new CharacterCopier(mockSource,mockDestination)

  }
  
})


 