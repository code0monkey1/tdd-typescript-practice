import { UniqueCsvFileWriter } from '../../../src/unique-csv-file-writer/main';
import { assertCustomersWereWritten, createCsvFileWriter, createCustomers, createMockFileSystem, createUniqueCsvFileWriter, getFileName } from '../csv-file-writer/helper';


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
        
          const sut = new UniqueCsvFileWriter(csvFileWriter)
        
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
      
    
  })
  
  
})

