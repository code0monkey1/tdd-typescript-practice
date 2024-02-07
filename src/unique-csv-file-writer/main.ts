import { Customer, IFileWriter } from "../csv-file-writer/main"

export class UniqueCsvFileWriter implements IFileWriter<Customer>{
     
    constructor(private csvFileWriter:IFileWriter<Customer>){}
    write(fileName: string, data: Customer[]): void {
      
      const uniqueCustomers = data
                                .filter((c,index,array)=> 
                                            data.indexOf(c)===data.lastIndexOf(c))

      this.csvFileWriter.write(fileName,uniqueCustomers)
    }

}
