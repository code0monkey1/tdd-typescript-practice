import { Customer, IFileWriter } from '../../../src/csv-file-writer/main';
import { createCsvFileWriter, createCustomers, createMockFileSystem, getFileName } from '../csv-file-writer/helper';


export class UniqueCsvFileWriter implements IFileWriter<Customer>{
     
    constructor(private csvFileWriter:IFileWriter<Customer>){}
    write(fileName: string, data: Customer[]): void {
       
      const uniqueCustomers:Customer[]=[]

      console.log("all customers",JSON.stringify(data,null,4))

      data.forEach(customer =>{

        const hasOccurred = uniqueCustomers
                            .find( prevCust => prevCust.getName()==customer.getName())
  
        if(!hasOccurred)uniqueCustomers.push(customer)
           
      })

      console.log("unique customers",JSON.stringify(data,null,4))

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

    sut.write(fileName,[new Customer('1','1'),new Customer('1','1'),new Customer('1','1')])

    //assert

    expect(mockFileSystem.writeLine).toHaveBeenCalledTimes(1)
    
   })
  
})

