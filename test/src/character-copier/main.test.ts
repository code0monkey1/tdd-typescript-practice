import { ICopier, IDestination, ISource } from '../../../src/character-copier/main';

export class CharacterCopier implements ICopier{

  constructor( private src:ISource, private dst:IDestination ){}

  copy(): void {
    
    let char = this.src.readChar()

    while (char !='\n'){

      this.dst.writeChar(char) 

      char = this.src.readChar()
    }

  }
}

class MockDestination implements IDestination{
  writeChar(str: string): void {
    throw new Error('Method not implemented.');
  }
}

class MockSource implements ISource{
  readChar(): string {
    throw new Error('Method not implemented.');
  }
}

describe.only('copy', () => {
  let mockSrc :ISource
  let mockDst :IDestination
  let characterCopier :ICopier

  beforeEach(()=>{
    mockSrc = new MockSource()
    mockDst= new MockDestination()

    characterCopier= new CharacterCopier(mockSrc,mockDst)
    jest.clearAllMocks()
  })

  describe('no character', () => {

      it('has no input, followed by a newline',()=>{
        
        //arrange 
        
        let actual:string[] = []

        const sut = characterCopier

        const src=jest.fn()
        
        src.mockReturnValue('\n')
  
        jest.spyOn(mockSrc,'readChar').mockImplementation(src)

        jest.spyOn(mockDst,'writeChar').mockImplementation((str:string)=>{
           actual.push(str)
        })
        
        //act 
  
        sut.copy()

        //assert

        expect(mockDst.writeChar).toHaveBeenCalledTimes(0)

        expect(actual).toStrictEqual([])

      })

  })

  describe('one character', () => {

      it.each([
        {input:'a'},
        {input:'b'}
      ])('$input followed by a newline',({input})=>{
        
        //arrange 
        
        let actual:string[] = []

        const sut = characterCopier

        const src=jest.fn()
        
        src.mockReturnValue('\n')

        src.mockReturnValueOnce(input)
  
        jest.spyOn(mockSrc,'readChar').mockImplementation(src)

        jest.spyOn(mockDst,'writeChar').mockImplementation((str:string)=>{
           actual.push(str)
        })
        
        //act 
  
        sut.copy()

        //assert

        expect(mockDst.writeChar).toHaveBeenCalledTimes(1)
        expect(mockDst.writeChar).toHaveBeenCalledWith(input)

        expect(actual).toContain(input)

      })

  })

  describe('characters after newline should not be written', () => {

      it.each([
        {
          chars:['a','b','c','\n','d','e','f'],
        expect:['a','b','c'] , 
        discount:['d','e','f']
      },
        {chars: ['d','e','f']}
      ])('$input followed by a newline',({chars})=>{
        
        //arrange 
        
        let actual:string[] = []

        const sut = characterCopier

        const src=jest.fn()
        
        src.mockReturnValue('\n')
        
        chars.map(c => src.mockReturnValueOnce(c))
        
        jest.spyOn(mockSrc,'readChar').mockImplementation(src)

        jest.spyOn(mockDst,'writeChar').mockImplementation((str:string)=>{
           actual.push(str)
        })
        
        //act 
  
        sut.copy()

        //assert

        expect(mockDst.writeChar).toHaveBeenCalledTimes(chars.length)

        chars.map(c=>    expect(mockDst.writeChar).toHaveBeenCalledWith(c))
       
        expect(actual).toStrictEqual(chars)

      })

  })


   describe('order of characters is same', () => {

      it.each([
        {chars:['a','b','c']},
        // {chars: ['d','e','f']}
      ])('$input followed by a newline',({chars})=>{
        
        //arrange 
        
        let actual:string[] = ['a','b','c']

        const sut = characterCopier

        const src=jest.fn()
        
        src.mockReturnValue('\n')
        
        chars.map(c => src.mockReturnValueOnce(c))
        
        jest.spyOn(mockSrc,'readChar').mockImplementation(src)

        jest.spyOn(mockDst,'writeChar').mockImplementation((str:string)=>{
          //  actual.push(str)
        })
        
        //act 
  
        sut.copy()

        //assert

        expect(mockDst.writeChar).toHaveBeenCalledTimes(chars.length)

        chars.map(c=> expect(mockDst.writeChar).toHaveBeenCalledWith(c))
       
        expect(actual).toStrictEqual(chars)

      })

  })
  
  
})



