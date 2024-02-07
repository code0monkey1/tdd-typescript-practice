import { Customer, IFileWriter } from '../../../src/csv-file-writer/main';
import { createCsvFileWriter, createCustomers, createMockFileSystem, getFileName } from '../csv-file-writer/helper';


export class UniqueCsvFileWriter implements IFileWriter<Customer>{
     
    constructor(private csvFileWriter:IFileWriter<Customer>){}
    write(fileName: string, data: Customer[]): void {
       
      const uniqueCustomers:Customer[]=[]

      data.forEach(customer =>{

        const isNotUnique = uniqueCustomers
                            .find( prevCust => prevCust.getName()==customer.getName())
  
        if(isNotUnique)uniqueCustomers.push(customer)
           
      })

      this.csvFileWriter.write(fileName,uniqueCustomers)
    }


}



describe('unique-csv-file-writer', () => {


   it('will only write one unique value',()=>{
        
    //arrange

    const customer1=createCustomers(1)
    const customer2=createCustomers(1)

    const mockFileSystem = createMockFileSystem()

    const csvFileWriter = createCsvFileWriter(mockFileSystem)

    const sut = new UniqueCsvFileWriter(csvFileWriter)

    //act

    const fileName=getFileName()

    sut.write(fileName,[...customer1,...customer2])

    //assert

    expect(mockFileSystem.writeLine)
          .toHaveBeenCalledTimes(1)
    
   })
  
})

