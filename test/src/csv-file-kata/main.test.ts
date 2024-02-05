import { Customer, IFileSystem } from '../../../src/csv-file-kata/main';


export class CsvFileWriter{
     
    constructor(private fs:IFileSystem){}

    writeCustomers(fileName:string,customers:Customer[]){
          
        this.fs.writeLine(fileName,customers[0].toString())
    }
}


describe('customer-file-writer', () => {


    describe('single customer', () => {
         
          it('a customer is written',()=>{

            //arrange

            const mockFileSystem = createMockFileSystem()

            const sut = createCsvFileWriter(mockFileSystem)

            const fileName="file.txt"

            const customer:Customer= createCustomer('a','1')
            
            const expected = fileName+","+'a'+','+"1"

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
