import { Customer, IFileSystem } from "../../../src/csv-file-kata/main"
import { BatchCsvFileWriter, CsvFileWriter, IFileWriter } from "./main.test"

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

          expect(fileSystem.writeLine)
              .toHaveBeenCalledTimes(customers.length)

    }



  export const createBatchedCsvFileWriter=(fileWriter:IFileWriter<Customer>,batchSize?:number)=>{
        
      return  new BatchCsvFileWriter(batchSize,fileWriter)
  }

