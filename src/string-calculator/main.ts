export class StringCalculator implements IStringCalculator{

  public add(input: string): number {

    let  trimmed=input.trim()

    if( (trimmed).length==0)  return 0

    let splitParams = [",", "\n"];

    if(this.hasCustomDelimiter(trimmed)){
      
      splitParams= [ this.extractCustomDelimiter(trimmed) ]
   
      trimmed=this.removeCustomDelimiter(trimmed)
    }

    const numbersArray = trimmed.split(new RegExp(`(${splitParams.join("|")})`))
                      .filter(e => parseInt(e)) // filter out non-numbers
                      .map( e => parseInt(e)) // parse numbers      
    
    if (this.hasNegativeNumber(numbersArray)){
        
      const negativeNumbers = this.extractNegativeNumbers(numbersArray)

      throw new Error("negatives not allowed"+" : "+negativeNumbers.join(','))

    }
                     
    const sum=numbersArray.reduce((current:number,prev:number)=> prev+=current) // sum

    return sum

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
