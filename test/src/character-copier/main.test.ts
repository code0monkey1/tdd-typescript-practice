import { ICopier, IDestination, ISource } from '../../../src/character-copier/main';

class CharacterCopier implements ICopier{

  constructor( private src:ISource, private dst:IDestination ){}

  copy(): void {
      
  }

}

describe('copy', () => {

  describe('only one character copied', () => {

      it('character copier reads `a` from src',()=>{
        
        //arrange
        const sut = createCharacterCopier()

        //act 
        


        //assert
        



      })
    
  })
  
  
})

const createSource=():ISource=>{

    const src:ISource={
        readChar: function (): string {
          return 'a'
        }
      }

  return src

}

const createDestination=():IDestination=>{
  
   const dst:IDestination={
    
    writeChar: function (str: string): void {
       
    }  
  }

  return dst
}

const createCharacterCopier=():ICopier=>{

   return new CharacterCopier( createSource(),createDestination())

}
