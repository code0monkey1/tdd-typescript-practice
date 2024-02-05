import { Customer, IFileSystem, TCustomer } from '../../../src/csv-file-kata/main';


export class CsvFileWriter{
     
    constructor(private fs:IFileSystem){}

    writeCustomers(fileName:string,customers:Customer[]){
          
        throw('Not Implemented')
    }
}


describe('customer-file-writer', () => {


    describe('single customer', () => {
         
          it('a customer is written',()=>{

            //arrange
            const writtenCustomers:string[]=[]

            const customer:TCustomer={
              name: 'a',
              contactNumber: '1'
            } 
            
            //act 



            //assert
            

          })
    })
    
      
  
})
