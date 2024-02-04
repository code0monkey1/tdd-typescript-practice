
interface IFileSystem<T>{
   
    write(data:T):void

}

export type Customer={
  name:string,
  contactNumber:string,
  toString:()=>string
}

export type CustomerData={
     fileName:string,
     customers:Customer[]
}

export type CustomerWriteData =Omit<CustomerData,'customers'>&{line:string}

export class CustomerFileSystem implements IFileSystem<CustomerWriteData>{
  write(data: CustomerWriteData): void {
    throw new Error("Method not implemented.")
  }
  
}

export interface FileWriter<T>{
    writeData(obj:T):void
}






