export interface ISource{
   readChar():string
}

export interface IDestination{
    writeChar(str:string):void
}

export interface ICopier{

      copy():void
}



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
