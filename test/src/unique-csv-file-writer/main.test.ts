import { Customer, IFileWriter } from '../../../src/csv-file-writer/main';
import { assertBatchedCustomersWereWritten, assertCustomerWasWritten, assertCustomersWereWritten, createCsvFileWriter, createCustomers, createMockFileSystem, createUniqueCsvFileWriter, getFileName } from '../csv-file-writer/helper';


export class UniqueCsvFileWriter implements IFileWriter<Customer>{
     
    constructor(private csvFileWriter:IFileWriter<Customer>){}
    write(fileName: string, data: Customer[]): void {
       
      const uniqueCustomers:Customer[]=[]

      data.forEach(customer =>{

        const isDuplicate = uniqueCustomers
                            .find( c => c.getName()==customer.getName())
  
        if(!isDuplicate)uniqueCustomers.push(customer)
           
      })


      this.csvFileWriter.write(fileName,uniqueCustomers)
    }

}


describe('unique-csv-file-writer', () => {


  describe('only 1 unique', () => {
    
    it('will only write one unique value',()=>{
         
      //arrange

      const customers =[
                        ...createCustomers(1),
                        ...createCustomers(1),
                        ...createCustomers(1)
                      ]
    
      const mockFileSystem = createMockFileSystem()
    
      const csvFileWriter = createCsvFileWriter(mockFileSystem)
    
      const sut = new UniqueCsvFileWriter(csvFileWriter)
    
      //act
    
      const fileName=getFileName()
    
      sut.write(fileName,customers)
    
      //assert
    
      expect(mockFileSystem.writeLine).toHaveBeenCalledTimes(1)
     
    })

  })

   describe('only 3 unique', () => {
    
    it('will only write 3 unique values',()=>{
         
      //arrange
      const customers =  [...createCustomers(3),...createCustomers(1)]
    
      const mockFileSystem = createMockFileSystem()
    
      const sut = createUniqueCsvFileWriter(mockFileSystem)
    
      //act
    
      const fileName=getFileName()
    
      sut.write(fileName,customers)
    
      //assert
    
      expect(mockFileSystem.writeLine).toHaveBeenCalledTimes(3)
     
    })

  })

    describe('all unique', () => {
    
      it('will only write unique customers',()=>{
            
        //arrange
    
        const customers =createCustomers(3)

        const mockFileSystem = createMockFileSystem()
      
        const sut = createUniqueCsvFileWriter(mockFileSystem)
      
        //act
      
        const fileName=getFileName()
      
        sut.write(fileName,customers)
      
        //assert
      
        expect(mockFileSystem.writeLine).toHaveBeenCalledTimes(3)
        
        assertCustomersWereWritten(mockFileSystem,fileName,customers)
      
      })
      
  })
  
  
})

