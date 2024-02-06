
export interface IFileSystem{
   writeLine(fileName:string,line:string):void
}

export class Customer{

  constructor(private name:string , private contactNumber:string){}
  
  
  public toString():string{
    return this.name+','+this.contactNumber
  }

  public getName(){
      return this.name
  }

  public getContactNumber(){
     return this.contactNumber
  }

}