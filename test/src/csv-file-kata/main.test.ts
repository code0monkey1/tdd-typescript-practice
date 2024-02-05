import { Customer, IFileSystem } from '../../../src/csv-file-kata/main';

export interface FileWriter<T> {
  write(fileName: string, data: T[]): void;
}


export class CsvFileWriter implements FileWriter<Customer>{
     
    constructor(private fs:IFileSystem){}
    write(fileName: string, data: Customer[]): void {
        data.map( c=> this.fs.writeLine(fileName,c.toString()))
    }
    writeCustomers(fileName:string,customers:Customer[]){
        
      this.write(fileName,customers)
    }
}


describe('customer-file-writer', () => {


    describe('single customer', () => {
         
          it('a customer is written',()=>{

            //arrange

            const mockFileSystem = createMockFileSystem()

            const sut = createCsvFileWriter(mockFileSystem)

            const customer:Customer= createCustomer('a','1')

            const fileName="file.txt"
            const line = customer.toString()

            
            const expected = fileName+","+line

            //act

            sut.writeCustomers(fileName,[customer])

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
