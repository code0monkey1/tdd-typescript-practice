export class FileUtil{

    public static geFilePrefix(fileName:string){
       return fileName.substring(0,fileName.indexOf('.'))
    }

    public static getFileSuffix(fileName:string){
      
      return fileName.substring(fileName.indexOf('.'))
    }

    public static isInvalidName(fileName:string){

        return fileName.indexOf('.')==-1 
    }

}