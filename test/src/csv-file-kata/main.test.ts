import { Customer, CustomerFileSystem, CustomerFileWriter } from '../../../src/csv-file-kata/main';


describe('customer-file-writer', () => {


    describe('single customer', () => {
         
          it('a customer is written',()=>{

            //arrange
             const mockFileWriter:CustomerFileSystem={
              
             }
             const sut= new CustomerFileWriter()

             const customer:Customer={
                name:"chinu",
                contactNumber:"1234",
                toString:()=>'chinu,1234'
             }

            //act

             sut.writeData(customer)


             //assert

             

          })
    })
    
      
  
})
