export type TCustomer={
  name:string,
  contactNumber:string
}

export class Customer{

  constructor(private customer:TCustomer){}
  
  toString():string{
    return this.customer.name
  }

}

export interface IFileSystem{
   writeLine(fileName:string,line:string):void
}