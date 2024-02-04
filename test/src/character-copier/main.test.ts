import { ICopier, IDestination, ISource } from '../../../src/character-copier/main';

class CharacterCopier implements ICopier{

  constructor( private src:ISource, private dst:IDestination ){}

  copy(): void {

    const char = this.src.readChar()

    this.dst.writeChar(char) 
  }
}

class MockDestination implements IDestination{
  public arr:string[] = []

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

  describe('only one character copied', () => {

      it('character copier writes `a` from src to dst ',()=>{

        //arrange 

        const sut = characterCopier

        const expected = ['a']
     

        jest.spyOn(mockSrc,'readChar').mockImplementation(()=>{
          return `a`
        })

        jest.spyOn(mockDst,'writeChar').mockImplementation((str:string)=>{
           arr.push(str)
        })

        
        //act 
        
        sut.copy()

        //assert
        expect(mockDst.writeChar).toHaveBeenCalledTimes(1)
        expect(mockDst.writeChar).toHaveBeenCalledWith('a')

        expect(actual).toStrictEqual(expected)

      })

      
    
    
  })
  
  
})



