export interface ISource{
   readChar():string
}

export interface IDestination{
    writeChar(str:string):void
}

export  abstract class ICopier{
      
      constructor(private src:ISource,private dst:IDestination){}

      copy(){
        let ch = this.src.readChar()

        this.dst.writeChar(ch)
      }
}