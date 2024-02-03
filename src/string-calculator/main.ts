export class StringCalculator implements IStringCalculator{

  public add(input: string): number {

    let  trimmed=input.trim()

    if( (trimmed).length==0)  return 0

    let splitParams = [",", "\n"];

    if(this.hasCustomDelimiter(trimmed)){
      
      splitParams= [ this.extractCustomDelimiter(trimmed) ]
   
      trimmed=this.removeCustomDelimiter(trimmed)
    }

    if(this.hasCustomMultiCharDelimiter(trimmed)){

      splitParams = [this.extractMultiCharDelimiter(trimmed)]
      
      trimmed = this.removeCustomDelimiter(trimmed)

    }

    if(this.hasArrayOfCustomCharDelimiters(trimmed)){

      splitParams = this.extractArrayOfCustomCharDelimiters(trimmed)
  
      trimmed=this.removeCustomDelimiter(trimmed)
    }

    let parsedNumbers = this.parseNumbers(trimmed, splitParams) // parse numbers      
    
    if (this.hasNegativeNumber(parsedNumbers)){
        
      const negativeNumbers = this.extractNegativeNumbers(parsedNumbers)

      throw ("negatives not allowed"+" : "+negativeNumbers.join(','))
    }

    parsedNumbers= this.removeGreaterThanN(parsedNumbers,1000)
   
    return parsedNumbers.reduce((current:number,prev:number)=> prev+=current,0) 

  }
  extractArrayOfCustomCharDelimiters(str: string): string[] {
     
    let res:string[]=[]

     do {
          res.push(this.extractMultiCharDelimiter(str))
      
          str=str.slice(str.indexOf(']')+1)

      } while (str.indexOf('[')!=-1);
    
    return res
    
  }

  private extractMultiCharDelimiter(str:string){

    return str.slice(str.indexOf('[')+1,str.indexOf(']'))

}
  private hasArrayOfCustomCharDelimiters(str:string){

        return str.startsWith('//[') && (str.indexOf(']') !== str.lastIndexOf(']'))
  }
  private parseNumbers(str: string, splitParams: string[]) {

    
    const charsArray = splitParams.length==1?str.split(splitParams[0]):str.split(new RegExp(splitParams.map(param => `\\${param}`).join('|')))

    return charsArray
    .filter(e => parseInt(e)) // filter out non-numbers
        .map(e => parseInt(e));
     
  }

  private hasCustomMultiCharDelimiter(str:string){
      return str.startsWith('//[') && (str.indexOf(']') == str.lastIndexOf(']'))
  }

  private removeGreaterThanN(arr:number[],n:number){
       
         return arr.filter(e => e<=n)
  }

  private extractNegativeNumbers(numbersArray: number[]) {
    return numbersArray.filter(e => e < 0);
  }

  private hasNegativeNumber(numbersArray: number[]) {
    return numbersArray.some(e => e < 0);
  }

  private extractCustomDelimiter(str:string){

      const DELIMITER_INDEX =2

      let customDelimiter=str[DELIMITER_INDEX]

      return customDelimiter
  }

  private removeCustomDelimiter(str: string): string {
    return str.substring(str.indexOf('\n') + 1);
  }

  private hasCustomDelimiter(trimmed: string) {
    return trimmed.startsWith('//') && trimmed.indexOf('\n') == 3;
  }
}
export interface IStringCalculator{
  add(input:string):number


}
