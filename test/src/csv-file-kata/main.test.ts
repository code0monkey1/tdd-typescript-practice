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

            //act

            //assert


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
