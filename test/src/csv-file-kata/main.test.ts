import { Customer, CustomerData, CustomerFileSystem, CustomerWriteData, FileWriter } from '../../../src/csv-file-kata/main';

class CustomerCsvFileWriter implements FileWriter<CustomerData>{

  constructor(private fs:CustomerFileSystem){}
  writeData(obj: CustomerData): void {
     
       obj.customers
       .map(c => this.fs.write({fileName:obj.fileName,line:c.toString()}))
  }

}

describe('customer-file-writer', () => {


    describe('single customer', () => {
         
          it('a customer is written',()=>{

            //arrange

            const arr:CustomerWriteData[]=[]
           

             const mockFileSystem:CustomerFileSystem={

               write: jest.fn((customerWriteData:CustomerWriteData)=>{
                   arr.push(customerWriteData)
               })
             }
             
             const sut= new CustomerCsvFileWriter(mockFileSystem)

             const customer:Customer={
                name:"chinu",
                contactNumber:"1234",
                toString:()=>'a'
             }

             const customerData:CustomerData={
               fileName: 'a.txt',
               customers: [customer]
             }

             const expected=[{fileName:"a.txt",line:"a"}]

            //act
        
             sut.writeData(customerData)


             //assert

             expect(arr).toStrictEqual(expected)
             
            

          })
    })
    
      
  
})
