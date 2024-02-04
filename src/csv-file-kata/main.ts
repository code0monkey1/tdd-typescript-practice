
interface IFileSystem<T>{
   
    write(data:T):void

}

export type Customer={
  name:string,
  contactNumber:string,
  toString:()=>{}
}

export type CustomerData={
     fileName:string,
     customers:Customer[]
}

export type CustomerWriteData =Omit<CustomerData,'customers'>&{line:string}

export class CustomerFileSystem implements IFileSystem<CustomerData>{
  write(data: CustomerData): void {
    throw new Error("Method not implemented.")
  }
  
}

export interface FileWriter<T>{
    writeData(obj:T):void
}






