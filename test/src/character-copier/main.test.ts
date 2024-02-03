export interface ISource{
   readChar():string
}

export interface IDestination{
    writeChar(str:string):void
}