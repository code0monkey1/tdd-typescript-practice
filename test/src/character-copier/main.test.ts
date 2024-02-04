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

  describe('multiple characters', () => {

      it.each([
        {input:['a','b','c']},
        {input: ['d','e','f']}
      ])('$input followed by a newline',({input})=>{
        
        //arrange 
        
        let actual:string[] = []

        const sut = characterCopier

        const src=jest.fn()
        
        src.mockReturnValue('\n')
        
        for(let c of input)
          src.mockReturnValueOnce(c)
        
        jest.spyOn(mockSrc,'readChar').mockImplementation(src)

        jest.spyOn(mockDst,'writeChar').mockImplementation((str:string)=>{
           actual.push(str)
        })
        
        //act 
  
        sut.copy()

        //assert

        expect(mockDst.writeChar).toHaveBeenCalledTimes(input.length)

        for(let c of input)
          expect(mockDst.writeChar).toHaveBeenCalledWith(c)

        expect(actual).toStrictEqual(input)

      })

  })
  
  
})



