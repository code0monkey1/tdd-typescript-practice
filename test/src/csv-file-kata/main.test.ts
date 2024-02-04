import { Customer, CustomerFileSystem, FileWriter } from '../../../src/csv-file-kata/main';

class CustomerCsvFileWriter implements FileWriter<Customer>{

  constructor(private fs:CustomerFileSystem){}

  writeData(obj: Customer): void {
    throw new Error('Method not implemented.');
  }

}

describe('customer-file-writer', () => {


    describe('single customer', () => {
         
          it('a customer is written',()=>{

            //arrange

            const mockWrite = jest.fn()
             const mockFileWriter:CustomerFileSystem={
               write:mockWrite
             }
             const sut= new CustomerCsvFileWriter(mockFileWriter)

             const customer:Customer={
                name:"chinu",
                contactNumber:"1234",
                toString:()=>'chinu,1234'
             }

             const expected={fileName:"a.txt",line:"a"}

            //act

          

             sut.writeData(customer)


             //assert


             

          })
    })
    
      
  
})
