import { Customer, IFileSystem } from '../../../src/csv-file-kata/main';
import { FileUtil } from '../../../src/utils/index';
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

    writeBatched(fileName:string,data:Customer[]):void{
           
        if(data.length>10){
            this.write("file.csv",data.slice(0,10))
            this.write("file-1.csv",data.slice(10))
           }
        else
          this.write("file.csv",data)
        
    }
}

export class BatchCsvFileWriter implements IFileWriter<Customer>{
   
  constructor(
    private batchSize=10,
    private csvFileWriter:IFileWriter<Customer>){}
  
    write(fileName: string, data: Customer[]): void {

      if(this.batchSize==0)
            throw ("batch size cannot be zero")
      if(FileUtil.isInvalidName(fileName))
            throw ("is invalid file name : "+fileName)
      
      
      for(let batch=0,fileIndex=0;batch<data.length;batch+=this.batchSize,fileIndex+=1){
            
            const formattedFileName =fileIndex==0?fileName:this.getFormattedFileName(fileName,fileIndex)
                  
            this.csvFileWriter.write(formattedFileName,data.slice(batch,batch+this.batchSize))

            
        }
 
    }

  


    private getFormattedFileName(fileName:string,fileIndex:number){
      return  fileIndex==0?fileName:
                                FileUtil.geFilePrefix(fileName)
                                  +"-"
                                    +fileIndex
                                       +FileUtil.getFileSuffix(fileName)
                    }

  
}


describe('batched-csv-file-writer', () => {

    describe('write', () => {


        describe('less than or equal to batchSize customers , written to same file', () => {
          
          it.each([{
               customers:createCustomers(10),
               batchSize:10
             }])('$customers.length customers , with batchSize : $batchSize',({customers,batchSize})=>{
  
               //arrange
         
                const mockFileSystem = createMockFileSystem()
          
                const csvFileWriter  = createCsvFileWriter(mockFileSystem)

                const fileName= getFileName()

                const sut =createBatchedCsvFileWriter(csvFileWriter,batchSize)
          
                //act

                sut.write(fileName,customers)

  
               //assert
              assertBatchedCustomersWereWritten(mockFileSystem,customers,fileName,batchSize)

           
           })
        })

        describe('greater than batchSize customers , written to different file', () => {
          
          it.each([{
               customers:createCustomers(0),
               batchSize:10
             }])('$customers.length customers , with batchSize : $batchSize',({customers,batchSize})=>{
  
               //arrange
         
                const mockFileSystem = createMockFileSystem()
          
                const csvFileWriter  = createCsvFileWriter(mockFileSystem)

                const fileName= getFileName()

                const sut =createBatchedCsvFileWriter(csvFileWriter,batchSize)
          
                //act

                sut.write(fileName,customers)

               //assert

               assertBatchedCustomersWereWritten(mockFileSystem,customers,fileName,batchSize)

           
           })
        })

        describe('if batch size is 0 , throw Error', () => {
          
          it.each([{
               customers:createCustomers(10),
               batchSize:0
             }])('$customers.length customers , with batchSize : $batchSize',({customers,batchSize})=>{
  
               //arrange
         
                const mockFileSystem = createMockFileSystem()
          
                const csvFileWriter  = createCsvFileWriter(mockFileSystem)

                const fileName= getFileName()

                const sut =createBatchedCsvFileWriter(csvFileWriter,batchSize)

                const errorMessage ="batch size cannot be zero"
          
                //act
  
               //assert
               
               expect(()=>sut.write(fileName,customers)).toThrow(errorMessage)


           
           })
        })

         describe('file has no extension , throw Error', () => {
          
          it.each([{
               customers:createCustomers(10),
               batchSize:1
             }])('$customers.length customers , with batchSize : $batchSize',({customers,batchSize})=>{
  
               //arrange
         
                const mockFileSystem = createMockFileSystem()
          
                const csvFileWriter  = createCsvFileWriter(mockFileSystem)

                const fileName= "file"

                const sut =createBatchedCsvFileWriter(csvFileWriter,batchSize)

                const errorMessage ="is invalid file name : "+fileName
          
                //act
  
               //assert
               
               expect(()=>sut.write(fileName,customers)).toThrow(errorMessage)


           
           })
        })
       
       

    })
    
  
})


 
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
