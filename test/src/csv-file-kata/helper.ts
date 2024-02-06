import { Customer, IFileSystem } from "../../../src/csv-file-kata/main"
import { CsvFileWriter } from "./main.test"

   export const getFileName=()=>{
       return "file.csv"
    }

  export const createMockFileSystem=()=>{
    
      let customerEntries:string[] =[]

      return{

        writeLine:jest.fn(( fileName:string, line:string)=>{
                    customerEntries.push(fileName+','+line)   
      }),
        
      getCustomerEntries(){
          return customerEntries
        }
    
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
    
  export const createCustomerData=(name=0,phoneNumber=0)=>{
    
       
          const customer =createCustomer(name+'',phoneNumber+'')
               
          return  getFileName()+","+customer.toString()

    }
    
   export const createCustomersData=(count=0):string[]=>{
    
        const customersData :string[]=[]
    
        for(let i =1;i<=count;i++)
           customersData.push(createCustomerData(i,i)  )
        
         
        return customersData
    
    }




