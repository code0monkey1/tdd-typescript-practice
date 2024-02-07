
export interface IFileSystem{
   writeLine(fileName:string,line:string):void
}

export class Customer{

  constructor(private name:string , private contactNumber:string){}
  
  
  public toString():string{
    return this.name+','+this.contactNumber
  }

  public getName(){
      return this.name
  }

  public getContactNumber(){
     return this.contactNumber
  }

}

export interface IFileWriter<T> {
  write(fileName: string, data: T[]): void;
}


export class CsvFileWriter implements IFileWriter<Customer>{
     
    constructor(private fs:IFileSystem){}
    write(fileName: string, data: Customer[]): void {
        data.forEach( c=> this.fs.writeLine(fileName,this.formatAsCsvRow(c)))
    }


    public formatAsCsvRow(c: Customer): string {
      return c.getName()+','+c.getContactNumber()
    }

}
