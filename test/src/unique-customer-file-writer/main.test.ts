import { BatchCustomerFileWriter } from '../../../src/batch-csv-file-writer/main';
import { UniqueCustomerFileWriter } from '../../../src/unique-customer-file-writer/main';
import { assertBatchedCustomersWereWritten, assertCustomersWereWritten, createBatchedCsvFileWriter, createCsvFileWriter, createCustomers, createMockFileSystem, createUniqueCsvFileWriter, getFileName } from '../csv-file-writer/helper';


describe('unique-csv-file-writer', () => {

  describe('write', () => {
    
      describe('1 unique customer', () => {
        
        it('will  write one',()=>{
             
          //arrange
    
          const customers =[
                            ...createCustomers(1),
                            ...createCustomers(1),
                            ...createCustomers(1)
                          ]
        
          const mockFileSystem = createMockFileSystem()
        
          const csvFileWriter = createCsvFileWriter(mockFileSystem)
        
          const sut = new UniqueCustomerFileWriter(csvFileWriter)
        
          //act
        
          const fileName=getFileName()
        
          sut.write(fileName,customers)
        
          //assert
        
          expect(mockFileSystem.writeLine).toHaveBeenCalledTimes(1)
         
        })
    
      })
    
       describe('3 unique customers', () => {
        
          it('will write 3 ',()=>{
              
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
    
        describe('all unique customers', () => {
        
          it('will write all',()=>{
                
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


        describe('all unique customers , written to different file batches', () => {
          
          it.each([{
               customers:createCustomers(10),
               batchSize:5
             }])('$customers.length customers , with batchSize : $batchSize',({customers,batchSize})=>{
  
               //arrange
         
                const mockFileSystem = createMockFileSystem()
        
                const fileName= getFileName()

                const csvFileWriter  = createCsvFileWriter(mockFileSystem)
        
                const batchCustomerFileWriter=  new BatchCustomerFileWriter(batchSize,csvFileWriter)

                const sut = new UniqueCustomerFileWriter(batchCustomerFileWriter)
          
                //act

                sut.write(fileName,customers)

  
               //assert
              assertBatchedCustomersWereWritten(mockFileSystem,customers,fileName,batchSize)

           
           })
        })

        describe('all unique customers , written to different file batches', () => {
          
          it.each([{
               customers:[...createCustomers(10), ...createCustomers(10)],
               batchSize:5
             }])('$customers.length customers , with batchSize : $batchSize',({customers,batchSize})=>{
  
               //arrange
         
                const mockFileSystem = createMockFileSystem()
        
                const fileName= getFileName()

                const csvFileWriter  = createCsvFileWriter(mockFileSystem)
        
                const batchCustomerFileWriter=  new BatchCustomerFileWriter(batchSize,csvFileWriter)

                const sut = new UniqueCustomerFileWriter(batchCustomerFileWriter)
          
                //act

                sut.write(fileName,customers)

             
              assertBatchedCustomersWereWritten(mockFileSystem,customers.slice(0,10),fileName,batchSize)

           
           })
        })
      
      
    
  })
  
  
})

