import { ICopier, IDestination, ISource } from '../../../src/character-copier/main';

class CharacterCopier implements ICopier{

  constructor( private src:ISource, private dst:IDestination ){}

  copy(): void {
    throw new Error('Method not implemented.');
  }

}

describe('copy', () => {

  describe('only one character copied', () => {


      it('copies `a` from src and writes it to destination',()=>{
        
        const sut = createCharacterCopier()



      })
    
  })
  
  
})

const createCharacterCopier=()=>{
    
  const src:ISource={
    readChar: function (): string {
      throw new Error('Function not implemented.');
    }
  }
  const dst:IDestination={
    
  }
   
   return new CharacterCopier()
}
