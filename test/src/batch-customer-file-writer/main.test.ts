
import {
  assertBatchedCustomersWereWritten,
  createBatchedCsvFileWriter,
  createCustomers,
  createMockFileSystem,
  getFileName
} from "../csv-file-writer/customer-file-writer-helper"




describe('batched-csv-file-writer', () => {

    describe('write', () => {


        describe('less than or equal to batchSize customers , written to same file', () => {
          
          it.each([{
               customers:createCustomers(10),
               batchSize:10
             }])('$customers.length customers , with batchSize : $batchSize',({customers,batchSize})=>{
  
               //arrange
         
                const mockFileSystem = createMockFileSystem()
        
                const fileName= getFileName()

                const sut =createBatchedCsvFileWriter(mockFileSystem,batchSize)
          
                //act

                sut.write(fileName,customers)

  
               //assert
              assertBatchedCustomersWereWritten(mockFileSystem,customers,fileName,batchSize)

           
           })
        })


        describe('greater than batchSize customers , written to different files', () => {
          
          it.each([{
               customers:createCustomers(10),
               batchSize:5
             }])('$customers.length customers , with batchSize : $batchSize',({customers,batchSize})=>{
  
               //arrange
         
                const mockFileSystem = createMockFileSystem()
        
                const fileName= getFileName()

                const sut =createBatchedCsvFileWriter(mockFileSystem,batchSize)
          
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

                const fileName= getFileName()

                const sut =createBatchedCsvFileWriter(mockFileSystem,batchSize)
          
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
        
                const fileName= getFileName()

                const sut =createBatchedCsvFileWriter(mockFileSystem,batchSize)

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
          

                const fileName= "file"

                const sut =createBatchedCsvFileWriter(mockFileSystem,batchSize)

                const errorMessage ="is invalid file name : "+fileName
          
                //act
  
               //assert
               
               expect(()=>sut.write(fileName,customers)).toThrow(errorMessage)


           
           })
        })
       
       

    })
    
  
})
