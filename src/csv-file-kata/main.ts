export type TCustomer={
  name:string,
  contactNumber:string
}

export class Customer{

  constructor(customerType:TCustomer){}
  
  toString():string{
    return ""
  }

}

export interface IFileSystem{
   writeLine(fileName:string,line:string):void
}