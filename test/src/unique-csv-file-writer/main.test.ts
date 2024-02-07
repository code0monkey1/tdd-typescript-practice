import { Customer, IFileSystem, IFileWriter } from '../../../src/csv-file-writer/main';
import { createCustomers } from '../csv-file-writer/helper';

export class UniqueCsvFileWriter implements IFileWriter<Customer>{
     
    constructor(private fs:IFileSystem){}
    write(fileName: string, data: Customer[]): void {
        data.forEach( c=> this.fs.writeLine(fileName,this.formatAsCsvRow(c)))
    }


    public formatAsCsvRow(c: Customer): string {
      return c.getName()+','+c.getContactNumber()
    }

}



describe('unique-csv-file-writer', () => {


   it('will only write one unique value',()=>{
        
    //arrange

    const customer1=createCustomers(1)

    const customer2=createCustomers(1)


    //act


    //assert

   })
  
})

