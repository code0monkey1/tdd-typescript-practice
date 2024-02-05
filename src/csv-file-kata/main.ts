
export interface IFileSystem{
   writeLine(fileName:string,line:string):void
}

export class Customer{

  constructor(private name:string , private contactNumber:string){}
  
  
  toString():string{
    return this.name+','+this.contactNumber
  }

}