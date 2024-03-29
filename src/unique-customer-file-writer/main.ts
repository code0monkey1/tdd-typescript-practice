import { Customer, IFileWriter } from "../csv-file-writer/main"

export class UniqueCustomerFileWriter implements IFileWriter<Customer>{
     
    constructor(private csvFileWriter:IFileWriter<Customer>){}
    write(fileName: string, data: Customer[]): void {
      
      const uniqueCustomers = data.filter((c,index,arr)=> arr.findIndex(cust =>
                                                              cust.getName()=== c.getName())===index)

      this.csvFileWriter.write(fileName,uniqueCustomers)
    }

}
