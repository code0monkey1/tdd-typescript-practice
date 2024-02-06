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
         
          it('a customer is written',()=>{

            //arrange

            const mockFileSystem = createMockFileSystem()

            const sut  = createCsvFileWriter(mockFileSystem)

            const customer:Customer= createCustomer('a','1')

            const fileName="file.txt"
            const line = customer.toString()

            
            const expected = fileName+","+line

            //act

            sut.write(fileName,[customer])

            //assert
           
            expect(mockFileSystem.getCustomerEntries()).toContain(expected)


          })
    })

        describe('two customers', () => {
         
          it.each([{
            customers:createCustomers(2),
            expected
          }])('a customer is written',()=>{

            //arrange

            const mockFileSystem = createMockFileSystem()

            const sut  = createCsvFileWriter(mockFileSystem)

            const customer:Customer= createCustomer('a','1')

            const fileName="file.txt"
            const line = customer.toString()

            
            const expected = fileName+","+line

            //act

            sut.write(fileName,[customer])

            //assert
           
            expect(mockFileSystem.getCustomerEntries()).toContain(expected)


          })
    })
    
      
  
})


const createMockFileSystem=()=>{

  let customerEntries:string[] =[]

  return{

    writeLine(fileName:string,line:string){
       customerEntries.push(fileName+','+line)
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


const createCustomers = (count:number)=>{

     const customers :Customer[]=[]
     
     for(let i =1;i<=count;i++)
       customers.push(createCustomer(i+'',i+''))
     
     return customers
}

const createCustomersData=(count:number):string[]=>{

      const customersData :string[]=[]

     for(let i =1;i<=count;i++){

      const customer =createCustomer(i+'',i+'')

      const fileName="file.txt"
      const line = customer.toString()
           
      const data = fileName+","+line

      customersData.push(data)
    }
      
     
     return customersData

}