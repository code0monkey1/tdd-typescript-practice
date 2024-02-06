import { Customer, IFileSystem } from '../../../src/csv-file-kata/main';
import {
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

export class BatchCsvFileWriter implements IFileWriter<Customer>{
   
  constructor(
    private batchSize=10,
    private csvFileWriter:IFileWriter<Customer>){}
  
    write(fileName: string, data: Customer[]): void {
      

         for(let i =0;i<data.length;i+=this.batchSize){
             
            const newFileName=i==0?fileName:fileName+"-"+i

            const batchData = data.slice(i,i+this.batchSize)

            this.csvFileWriter.write(newFileName,batchData)
         }
          
    }
  
}


describe('batched-csv-file-writer', () => {

    describe('write', () => {


         it.each([{
              customers:createCustomers(10),
  
            }])('customers : JSON.stringify($customers)',({customers})=>{

              //arrange
             
              const mockFileSystem = createMockFileSystem()
      
              const csvFileWriter  = createCsvFileWriter(mockFileSystem)
               
              const sut = createBatchedCsvFileWriter(csvFileWriter)
      
              //act

              sut.write(getFileName(),customers)

              //assert

              assertCustomersWereWritten(mockFileSystem,getFileName(),customers)
              
           
          })

       

    })
    
  
})


 
describe('customer-file-writer', () => {
    
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
