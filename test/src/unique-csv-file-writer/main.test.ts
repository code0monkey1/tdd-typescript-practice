import { Customer, IFileWriter } from '../../../src/csv-file-writer/main';
import { assertBatchedCustomersWereWritten, assertCustomerWasWritten, assertCustomersWereWritten, createCsvFileWriter, createCustomers, createMockFileSystem, getFileName } from '../csv-file-writer/helper';


export class UniqueCsvFileWriter implements IFileWriter<Customer>{
     
    constructor(private csvFileWriter:IFileWriter<Customer>){}
    write(fileName: string, data: Customer[]): void {
       
      const uniqueCustomers:Customer[]=[]

      data.forEach(customer =>{

        const isDuplicate = uniqueCustomers
                            .find( prevCust => prevCust.getName()==customer.getName())
  
        if(!isDuplicate)uniqueCustomers.push(customer)
           
      })


      this.csvFileWriter.write(fileName,uniqueCustomers)
    }


}



describe('unique-csv-file-writer', () => {



  describe('all duplicates', () => {
    
    it('will only write one unique value',()=>{
         
      //arrange
    
      const customer1=createCustomers(1)
      const customer2=createCustomers(1)
    
      const mockFileSystem = createMockFileSystem()
    
      const csvFileWriter = createCsvFileWriter(mockFileSystem)
    
      const sut = new UniqueCsvFileWriter(csvFileWriter)
    
      //act
    
      const fileName=getFileName()
    
      sut.write(fileName,[new Customer('1','1'),new Customer('2','1'),new Customer('1','1')])
    
      //assert
    
      expect(mockFileSystem.writeLine).toHaveBeenCalledTimes(2)
     
    })

  })

    describe('one duplicate', () => {
    
      it('will only write unique customers',()=>{
            
        //arrange
      
        const customer1=new Customer('1','1')
        const customer2=new Customer('1','1')
        const customer3=new Customer('2','1')
      
        const mockFileSystem = createMockFileSystem()
      
        const csvFileWriter = createCsvFileWriter(mockFileSystem)
      
        const sut = new UniqueCsvFileWriter(csvFileWriter)
      
        //act
      
        const fileName=getFileName()
      
        sut.write(fileName,[customer1,customer2,customer3])
      
        //assert
      
        expect(mockFileSystem.writeLine).toHaveBeenCalledTimes(2)
        assertCustomerWasWritten(mockFileSystem,fileName,customer1)
        assertCustomerWasWritten(mockFileSystem,fileName,customer3)
      
      
      })
      
  })
  
  
})

