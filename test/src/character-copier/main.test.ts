import { ICopier, IDestination, ISource } from '../../../src/character-copier/main';

class CharacterCopier implements ICopier{

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

  describe('only one character copied', () => {

      it('character copier writes `a` from src to dst ',()=>{
        
        let arr:string[] = []

        //arrange 
        const src = new MockSource()
        const dst = new MockDestination()

        const sut = createCharacterCopier(src,dst)

        const expected = ['a']
        const actual = arr

        //act 
        
        jest.spyOn(src,'readChar').mockImplementation(()=>{
          return `a`
        })

        jest.spyOn(dst,'writeChar').mockImplementation((str:string)=>{
          arr.push(str)
        })

        //assert
        sut.copy()

        expect(actual).toStrictEqual(expected)

      })
    
  })
  
  
})




const createCharacterCopier=(src:ISource,dst:IDestination):ICopier=>{

   return new CharacterCopier( src,dst)

}
