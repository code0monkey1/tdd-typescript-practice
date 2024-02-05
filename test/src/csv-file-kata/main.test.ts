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
            
              const customer:Customer= new Customer({
                name: 'c',
                contactNumber: '1'
              }
            )
            
            // data for writeCustomers

            const fileName="a.txt"
            const customers=[customer]
            
            const writtenCustomers:string[]=[]

            const fs ={
              
              writeLine: jest.fn((fineName:string,line:string)=>{
                   
                  writtenCustomers.push( fileName+","+line)

              })
            }
            //act 
            
            const sut = new CsvFileWriter(fs)

            sut.writeCustomers(fileName,customers)

            //assert
            

          })
    })
    
      
  
})
