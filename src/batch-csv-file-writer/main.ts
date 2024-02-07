import { IFileWriter } from "../csv-file-writer/main"
import { FileUtil } from "../utils"



export class BatchCsvFileWriter<Customer> implements IFileWriter<Customer>{
   
  constructor(
    private batchSize=10,
    private csvFileWriter:IFileWriter<Customer>){}
  
    write(fileName: string, data: Customer[]): void {

      if(this.batchSize==0)
            throw ("batch size cannot be zero")
      if(FileUtil.isInvalidName(fileName))
            throw ("is invalid file name : "+fileName)
      
      
      for(let batch=0,fileIndex=0;batch<data.length;batch+=this.batchSize,fileIndex+=1){
            
            const formattedFileName =fileIndex==0?fileName:this.getFormattedFileName(fileName,fileIndex)
                  
            this.csvFileWriter.write(formattedFileName,data.slice(batch,batch+this.batchSize))

            
        }
 
    }

  
    private getFormattedFileName(fileName:string,fileIndex:number){
      return  fileIndex==0?fileName:
                                FileUtil.geFilePrefix(fileName)
                                  +"-"
                                    +fileIndex
                                       +FileUtil.getFileSuffix(fileName)
                    }

  
}
