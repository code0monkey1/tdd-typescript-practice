interface IFileWriter<T>{
   
    write(data:T):void

}

type Customer={
  name:string,
  contactNumber:string,
  toString:()=>{}
}

type CustomerData={
     fileName:string,
     customers:Customer[]
}

class CustomerFileWriter implements IFileWriter<CustomerData>{
  write(data: CustomerData): void {
    throw new Error("Method not implemented.")
  }
  
}