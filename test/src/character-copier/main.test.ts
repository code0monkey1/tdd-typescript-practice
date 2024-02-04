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
        
        



      })
    
  })
  
  
})
