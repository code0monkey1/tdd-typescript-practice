import { ICopier, IDestination, ISource } from '../../../src/character-copier/main';

class CharacterCopier implements ICopier{
  private arr:string[]=[]
  constructor( private src:ISource, private dst:IDestination ){}

  copy(): void {
      
  }

  getCharArray=()=>{
    return this.arr
  }

}

describe('copy', () => {

  describe('only one character copied', () => {

      it('character copier reads `a` from src',()=>{
        
        //arrange
        const src:ISource={
          readChar: function (): string {
            throw new Error('Function not implemented.');
          }
        }

         const dst:IDestination={
           writeChar: function (str: string): void {
             throw new Error('Function not implemented.');
           }
         }
        
        const sut = createCharacterCopier(src,dst)

        //act 

        //assert
      

      })
    
  })
  
  
})




const createCharacterCopier=(src:ISource,dst:IDestination):ICopier=>{

   return new CharacterCopier( src,dst)

}
