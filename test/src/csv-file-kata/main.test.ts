import { Customer, IFileSystem } from '../../../src/csv-file-kata/main';

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


    describe('one customer', () => {
         
          it.each([{
              customers:createCustomers(1),
              expected :createCustomersData(1)
            }])('a customer is written',({customers,expected})=>{

            //arrange


              const mockFileSystem = createMockFileSystem()
      
              const sut  = createCsvFileWriter(mockFileSystem)
      
      
              //act

              sut.write(getFileName(),customers)

              //assert
            
              expect(mockFileSystem.getCustomerEntries()).toStrictEqual(expected)


          })


          describe('multiple customers', () => {
           
            it.each([{
              customers:createCustomers(2),
              expected :createCustomersData(2)
            },
            {
              customers:createCustomers(0),
              expected :createCustomersData(0)
            }
          ])('customer',({customers,expected})=>{
      
              //arrange
      
              const mockFileSystem = createMockFileSystem()
      
              const sut  = createCsvFileWriter(mockFileSystem)
      
      
              //act
      
              sut.write(getFileName(),customers)
      
              //assert
             
              expect(mockFileSystem.getCustomerEntries()).toStrictEqual(expected)
      
      
            })
      })

    })


      
  
})



   const getFileName=()=>{
       return "file.csv"
    }

    const createMockFileSystem=()=>{
    
      let customerEntries:string[] =[]
    
      return{
    
        writeLine(fileName:string,line:string){
           customerEntries.push(getFileName()+','+line)
        },
    
        getCustomerEntries(){
          return customerEntries
        }
    
      }  
    
    }
    
    const createCsvFileWriter=(fs:IFileSystem)=>{
    
        return new CsvFileWriter(fs)
    }
    
    const createCustomer =(name:string,contactNumber:string)=>{
    
       return new Customer(name,contactNumber)
    
    }
    
    
    const createCustomers = (count=0)=>{
    
         const customers :Customer[]=[]
         
         for(let i =1;i<=count;i++)
           customers.push(createCustomer(i+'',i+''))
         
         return customers
    }
    
    const createCustomerData=(name=0,phoneNumber=0)=>{
    
       
          const customer =createCustomer(name+'',phoneNumber+'')
    
          const fileName=getFileName()

          const line = customer.toString()
               
          const customerData = fileName+","+line
    
          return customerData
    }
    
    const createCustomersData=(count=0):string[]=>{
    
          const customersData :string[]=[]
    
         for(let i =1;i<=count;i++){
    
          const data =createCustomerData(i,i)  
      
          customersData.push(data)
        }
          
         
         return customersData
    
    }
