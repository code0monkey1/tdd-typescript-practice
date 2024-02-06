import { Customer, IFileSystem } from '../../../src/csv-file-kata/main';
import { createCsvFileWriter, createCustomers, createCustomersData, createMockFileSystem, getFileName } from './helper';

export interface IFileWriter<T> {
  write(fileName: string, data: T[]): void;
}


export class CsvFileWriter implements IFileWriter<Customer>{
     
    constructor(private fs:IFileSystem){}
    write(fileName: string, data: Customer[]): void {
        data.map( c=> this.fs.writeLine(fileName,c.toString()))
    }

}

 
describe('customer-file-writer', () => {
    
   describe(' zero customers', () => {
     
            
        it.each([{
              customers:createCustomers(0),
              expected :createCustomersData(0)
            }])('no customer data is written',({customers,expected})=>{
         //arrange


            const mockFileSystem = createMockFileSystem()
      
            const sut  = createCsvFileWriter(mockFileSystem)
      
      
            //act

            sut.write(getFileName(),customers)

              //assert
            
            expect(mockFileSystem.getCustomerEntries()).toStrictEqual(expected)

          })

     
   })

    describe('one customer', () => {
         
          it.each([{
              customers:createCustomers(1),
              expected :createCustomersData(1)
            }])('customer : ($customers[0]) , expected : $expected',({customers,expected})=>{

            //arrange


              const mockFileSystem = createMockFileSystem()
      
              const sut  = createCsvFileWriter(mockFileSystem)
      
      
              //act

              sut.write(getFileName(),customers)

              //assert
            
              expect(mockFileSystem.getCustomerEntries()).toStrictEqual(expected)


          })

          describe('multiple customers', () => {
           
            it.each([{
              customers:createCustomers(2),
              expected :createCustomersData(2)
            },
            {
              customers:createCustomers(0),
              expected :createCustomersData(0)
            }
          ])('customer : $customers expected : $expected',({customers,expected})=>{
      
              //arrange
      
              const mockFileSystem = createMockFileSystem()
      
              const sut  = createCsvFileWriter(mockFileSystem)
      
      
              //act
      
              sut.write(getFileName(),customers)
      
              //assert
             
              expect(mockFileSystem.getCustomerEntries()).toStrictEqual(expected)
      
      
            })
      })

    })
  
})


