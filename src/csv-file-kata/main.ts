

export type TCustomer={
  name:string,
  contactNumber:string
}

export class Customer{

  constructor(private name:string,private contactNumber:string){}
  
  toString():string{
    return ""
  }

}


export interface IFileSystem{
   writeLine(fileName:string,line:string):void
}