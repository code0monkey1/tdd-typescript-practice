
import {
  assertCustomersWereWritten,
  createCsvFileWriter,
  createCustomers,
  createMockFileSystem,
  getFileName
} from './customer-file-writer-helper';

 
describe('customer-file-writer', () => {

  describe('write',()=>{

    describe('zero customers', () => {
      
             
         it.each([{
               customers:createCustomers(0),
             }])('no customer data is written',({customers})=>{

             //arrange         
  
             const mockFileSystem = createMockFileSystem()
       
             const sut  = createCsvFileWriter(mockFileSystem)
       
             //act
  
             sut.write(getFileName(),customers)
  
  
             //assert
             
             expect(mockFileSystem.writeLine).not.toHaveBeenCalled()
  
  
           })
  
      
    })
  
     describe('one customer', () => {
          
           it.each([{
               customers:createCustomers(1),
   
             }])('customers : $customers',({customers})=>{
  
             //arrange
              
               const mockFileSystem = createMockFileSystem()
       
               const sut  = createCsvFileWriter(mockFileSystem)
        
       
               //act
  
               sut.write(getFileName(),customers)
  
               //assert
  
               assertCustomersWereWritten(mockFileSystem,getFileName(),customers)
               
            
           })
  
  
           
         })
     describe('multiple customers', () => {
                  
                   it.each([
                     {
                     customers:createCustomers(2),
  
                     },
                     {
                     customers:createCustomers(0),
    
                   }
                 ])('customers : $customers, expected : $expected',({customers})=>{
                        
                  
             
                     const mockFileSystem = createMockFileSystem()
             
                     const sut  = createCsvFileWriter(mockFileSystem)
             
             
                     //act
                     sut.write(getFileName(),customers)
             
                     //assert
                      assertCustomersWereWritten(mockFileSystem,getFileName(),customers)
               
             
                   })
           
             })
      
  })
    
        
    })
