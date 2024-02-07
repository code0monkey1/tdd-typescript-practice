import { Customer, IFileSystem } from '../../../src/csv-file-kata/main';
import { FileUtil } from '../../../src/utils/index';
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

    writeBatched(fileName:string,data:Customer[]):void{
           
        if(data.length>10){
            this.write("file.csv",data.slice(0,10))
            this.write("file-1.csv",data.slice(10))
           }
    }
}

export class BatchCsvFileWriter implements IFileWriter<Customer>{
   
  constructor(
    private batchSize=10,
    private csvFileWriter:IFileWriter<Customer>){}
  
    write(fileName: string, data: Customer[]): void {
      
        
         for(let i =0;i<data.length;i+=this.batchSize){
             
            const formattedFileName= BatchCsvFileWriter.getFormattedFileName(fileName,i)

            const batchData = data.slice(i,i+this.batchSize)

            this.csvFileWriter.write(formattedFileName,batchData)
         }
          
    }


    public static getFormattedFileName(fileName:string,index:number){
      return  index==0?fileName:
                                FileUtil.geFilePrefix(fileName)
                                  +"-"
                                    +index
                                       +FileUtil.getFileSuffix(fileName)
                    }

  
  
}


describe.only('batched-csv-file-writer', () => {

    describe('write', () => {
    

        describe('less than batchSize customers , written to same file', () => {
          
          it.each([{
               customers:createCustomers(20),
               batchSize:10
             }])('$customers.length customers , with batchSize : $batchSize',({customers,batchSize})=>{
  
               //arrange
         
                const mockFileSystem = createMockFileSystem()
          
                const sut  = createCsvFileWriter(mockFileSystem)

                const fileName= getFileName()
          
                //act

                sut.write(getFileName(),customers)

  
               //assert

               assertCustomersWereWritten(mockFileSystem,"file.csv",customers.slice(0,10))
              assertCustomersWereWritten(mockFileSystem,"file-1.csv",customers.slice(10))

              // assertCustomersWereWritten(mockFileSystem,
              //             BatchCsvFileWriter.getFormattedFileName(getFileName(),1),
              //             customers.slice(10)) 
            
           
           })
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
