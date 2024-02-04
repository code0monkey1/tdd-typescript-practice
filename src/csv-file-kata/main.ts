interface IFileWriter<T>{
   
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

export class CustomerFileWriter implements IFileWriter<CustomerData>{
  write(data: CustomerData): void {
    throw new Error("Method not implemented.")
  }
  
}


