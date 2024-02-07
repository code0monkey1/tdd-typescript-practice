import { BatchCsvFileWriter } from '../../../src/batch-csv-file-writer/main';
import { CsvFileWriter, Customer, IFileSystem } from "../../../src/csv-file-writer/main";
import { UniqueCsvFileWriter } from '../../../src/unique-csv-file-writer/main';
import { FileUtil } from "../../../src/utils";

   export const getFileName=()=>{
       return "file.csv"
    }


  export const createMockFileSystem=()=>{
       
      return{
        
           writeLine:jest.fn()
         
      }  
    
    }
    
   export  const createCsvFileWriter=(fs:IFileSystem)=>{
    
        return new CsvFileWriter(fs)
    }
    
    const createCustomer =(name:string,contactNumber:string)=>{
    
       return new Customer(name,contactNumber)
    
    }
    
    
  export const createCustomers = (count=0)=>{
    
         const customers :Customer[]=[]
         
         for(let i =1;i<=count;i++)
           customers.push(createCustomer(i+'',i+''))
         
         return customers
    }
    

  export const assertCustomerWasWritten=(
    fileSystem:IFileSystem,
    fileName:string,
    customer:Customer)=>{
        
  
            
        expect(fileSystem.writeLine)
          .toHaveBeenCalledWith(fileName, customer.getName()+','+customer.getContactNumber())


    }


  export const assertCustomersWereWritten=(
    fileSystem:IFileSystem,
    fileName:string,
    customers:Customer[])=>{

            
          customers.forEach(c => assertCustomerWasWritten(fileSystem,fileName,c))


    }



  export const createBatchedCsvFileWriter=(mockFileSystem:IFileSystem ,batchSize?:number)=>{
         
      const csvFileWriter  = createCsvFileWriter(mockFileSystem)
        
      return  new BatchCsvFileWriter(batchSize,csvFileWriter)
  }

  export const createUniqueCsvFileWriter =(mockFileSystem:IFileSystem ) =>{
              
      const csvFileWriter  = createCsvFileWriter(mockFileSystem)

      return new UniqueCsvFileWriter(csvFileWriter)
  }

  export const assertBatchedCustomersWereWritten=(
    mockFileSystem:IFileSystem,
    customers:Customer[],
    fileName:string,
    batchSize=10)=>{
            
            
                       
          const prefix=FileUtil.geFilePrefix(fileName)
          const suffix=FileUtil.getFileSuffix(fileName)


          for(let batch=0,fileIndex=0;batch<customers.length;batch+=batchSize,fileIndex+=1){

          
            const formattedFileName =fileIndex==0?fileName:prefix+"-"+fileIndex+suffix
                  
            assertCustomersWereWritten(mockFileSystem,formattedFileName,customers.slice(batch,batch+batchSize))
        }
         

  }

  

