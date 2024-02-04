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
         
        let arr:string[]=[]
        //arrange
        const src:ISource={
          readChar: function (): string {
            return 'a'
          }
        }

         const dst:IDestination={
           writeChar: function (str: string): void {
             arr.push(str)
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
