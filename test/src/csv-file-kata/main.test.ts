import { Customer, CustomerFileWriter } from '../../../src/csv-file-kata/main';


describe('customer-file-writer', () => {


    describe('single customer', () => {
         
          it('a customer is written',()=>{
            
             const sut= new CustomerFileWriter()

             const customer:Customer={
              
             }

             sut.writeData()

          })
    })
    
      
  
})
