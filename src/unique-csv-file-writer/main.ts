import { Customer, IFileWriter } from "../csv-file-writer/main"

export class UniqueCsvFileWriter implements IFileWriter<Customer>{
     
    constructor(private csvFileWriter:IFileWriter<Customer>){}
    write(fileName: string, data: Customer[]): void {
       
      // const uniqueCustomers:Customer[]=[]

      const uniques = data.filter((c,index,array)=> array.findIndex( cust => cust.getName()===c.getName())===index)

      // data.forEach(customer =>{

      //   const isDuplicate = uniqueCustomers
      //                       .find( c => c.getName()==customer.getName())
  
      //   if(!isDuplicate)uniqueCustomers.push(customer)
           
      // })

      this.csvFileWriter.write(fileName,uniques)
    }

}
