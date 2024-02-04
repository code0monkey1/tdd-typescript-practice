import { ICopier, IDestination, ISource } from '../../../src/character-copier/main';

export class CharacterCopier implements ICopier{

  constructor( private src:ISource, private dst:IDestination ){}

  copy(): void {

    const char = this.src.readChar()

    this.dst.writeChar(char) 
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

  describe('only one character copied', () => {

      it.each([
        {input:'a'},
        {input:'b'}
      ])('one character $input',({input})=>{
        
        //arrange 
        
        let actual:string[] = []

        const sut = characterCopier
  
        jest.spyOn(mockSrc,'readChar').mockImplementation(()=>{
          return input
        })

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
  
  
})



