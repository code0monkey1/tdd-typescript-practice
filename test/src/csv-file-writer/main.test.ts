import { Customer, IFileSystem } from '../../../src/csv-file-writer/main';

import {
  assertBatchedCustomersWereWritten,
  assertCustomersWereWritten,
  createBatchedCsvFileWriter,
  createCsvFileWriter,
  createCustomers,
  createMockFileSystem,
  getFileName
} from './helper';

export interface IFileWriter<T> {
  write(fileName: string, data: T[]): void;
}


export class CsvFileWriter implements IFileWriter<Customer>{
     
    constructor(private fs:IFileSystem){}
    write(fileName: string, data: Customer[]): void {
        data.forEach( c=> this.fs.writeLine(fileName,this.formatAsCsvRow(c)))
    }


    public formatAsCsvRow(c: Customer): string {
      return c.getName()+','+c.getContactNumber()
    }

}



 
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
