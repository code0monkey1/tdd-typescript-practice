import { Customer, IFileSystem } from "../../../src/csv-file-kata/main"
import { CsvFileWriter } from "./main.test"

   export const getFileName=()=>{
       return "file.csv"
    }

    export const createCustomerEntry=(fileName:string,line:string)=>{
       return fileName+','+line
    }

  export const createMockFileSystem=()=>{
    
      let customerEntries:string[] =[]

      return{

        writeLine:jest.fn(( fileName:string, line:string)=>{
              customerEntries.push(createCustomerEntry(fileName,line))   
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
    
  export const createCustomerLineData=(name=0,phoneNumber=0)=>{
    
       
          const customer =createCustomer(name+'',phoneNumber+'')
               
          return  getFileName()+","+customer.toString()

    }
    
   export const createCustomersLineData=(count=0):string[]=>{
    
        const customersData :string[]=[]
    
        for(let i =1;i<=count;i++)
           customersData.push(createCustomerLineData(i,i)  )
        
         
        return customersData
    
    }

  export const assertCustomerWasWritten=(fileSystem:IFileSystem,fileName:string,customer:Customer)=>{

            
              expect(fileSystem.writeLine).toHaveBeenCalledWith(getFileName(),customer.toString())


    }


  export const assertCustomersWereWritten=(fileSystem:IFileSystem,fileName:string,customers:Customer[])=>{

            
          customers.map(c => assertCustomerWasWritten(fileSystem,fileName,c))

          expect(fileSystem.writeLine).toHaveBeenCalledTimes(customers.length)

    }




