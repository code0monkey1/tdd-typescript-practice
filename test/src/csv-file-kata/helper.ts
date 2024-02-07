import { Customer, IFileSystem } from "../../../src/csv-file-kata/main";
import { BatchCsvFileWriter, CsvFileWriter, IFileWriter } from "./main.test";

   export const getFileName=()=>{
       return "file.csv"
    }


  export const createMockFileSystem=()=>{
    
      return{
        
          writeLine:jest.fn(),
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



  export const createBatchedCsvFileWriter=(fileWriter:IFileWriter<Customer>,batchSize?:number)=>{
        
      return  new BatchCsvFileWriter(batchSize,fileWriter)
  }

  export const assertBatchedCustomersWereWritten=(mockFileSystem:IFileSystem,customers:Customer[])=>{

         assertCustomersWereWritten(mockFileSystem,"file.csv",customers.slice(0,10))
               assertCustomersWereWritten(mockFileSystem,"file-1.csv",customers.slice(10))
          expect(mockFileSystem.writeLine).toHaveBeenCalledTimes(customers.length)
  }

