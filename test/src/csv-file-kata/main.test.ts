import { Customer, IFileSystem } from '../../../src/csv-file-kata/main';
import {
  assertCustomersWereWritten,
  createCsvFileWriter,
  createCustomers,
  createCustomersLineData,
  createMockFileSystem,
  getFileName
} from './helper';

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
    
   describe('zero customers', () => {
     
            
        it.each([{
              customers:createCustomers(0),
              expected :createCustomersLineData(0)
            }])('no customer data is written',({customers,expected})=>{
         //arrange
            
         

            const mockFileSystem = createMockFileSystem()
      
            const sut  = createCsvFileWriter(mockFileSystem)
      
      
            //act


            sut.write(getFileName(),customers)


            //assert

            expect(mockFileSystem.getCustomerEntries()).toStrictEqual(expected)
            
            expect(mockFileSystem.writeLine).not.toHaveBeenCalled()


          })

     
   })

    describe('one customer', () => {
         
          it.each([{
              customers:createCustomers(1),
              expected :createCustomersLineData(1)
            }])('customers : $customers, expected : $expected',({customers,expected})=>{

            //arrange
             
           

              const mockFileSystem = createMockFileSystem()
      
              const sut  = createCsvFileWriter(mockFileSystem)
          
              const actual = mockFileSystem.getCustomerEntries()
      
              //act

              sut.write(getFileName(),customers)

              //assert

         

              expect(actual).toStrictEqual(expected)
            
              assertCustomersWereWritten(mockFileSystem,getFileName(),customers)
              
           
          })


          
        })
    describe('multiple customers', () => {
                 
                  it.each([{
                    customers:createCustomers(2),
                    expected :createCustomersLineData(2)
                  },
                  {
                    customers:createCustomers(0),
                    expected :createCustomersLineData(0)
                  }
                ])('customers : $customers, expected : $expected',({customers,expected})=>{
                       
                 
            
                    const mockFileSystem = createMockFileSystem()
            
                    const sut  = createCsvFileWriter(mockFileSystem)
            
            
                    //act
            
                    sut.write(getFileName(),customers)
            
                    //assert
                    

                    expect(mockFileSystem.getCustomerEntries()).toStrictEqual(expected)
            
            
                  })
          
            })

    })
