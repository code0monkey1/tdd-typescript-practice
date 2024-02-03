export class StringCalculator implements IStringCalculator{

  public add(input: string): number {

    let  trimmed=input.trim()

    if( (trimmed).length==0)  return 0

    let splitParams = [",", "\n"];

    if(this.hasCustomDelimiter(trimmed)){
      
      splitParams= [ this.extractCustomDelimiter(trimmed) ]
   
      trimmed=this.removeCustomDelimiter(trimmed)
    }

    let parsedNumbers = this.parseNumbers(trimmed, splitParams) // parse numbers      
    
    if (this.hasNegativeNumber(parsedNumbers)){
        
      const negativeNumbers = this.extractNegativeNumbers(parsedNumbers)

      throw ("negatives not allowed"+" : "+negativeNumbers.join(','))
    }

    parsedNumbers= this.removeGreaterThanN(parsedNumbers,1000)
    console.log("Parsed Numbers",parsedNumbers)
    return parsedNumbers.reduce((current:number,prev:number)=> prev+=current) 

  }

  private parseNumbers(trimmed: string, splitParams: string[]) {
    return trimmed.split(new RegExp(`(${splitParams.join("|")})`))
      .filter(e => parseInt(e)) // filter out non-numbers
      .map(e => parseInt(e));
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

  private removeCustomDelimiter(trimmed: string): string {
    return trimmed.substring(trimmed.indexOf('\n') + 1);
  }

  private hasCustomDelimiter(trimmed: string) {
    return trimmed.startsWith('//') && trimmed.indexOf('\n') == 3;
  }
}
export interface IStringCalculator{
  add(input:string):number


}
