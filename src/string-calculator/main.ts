export class StringCalculator implements IStringCalculator{
  add(input: string): number {

    const trimmed=input.trim()

    if( (trimmed).length==0)  return 0

    // more than 1 digit
  
    const sum = this.getSum(this.getDigitsArray(trimmed.split(',')))

    return sum

  }

  private getSum(arr:number[]){

   return arr.reduce((prev:number,current:number)=> prev+=current,0)
   
  }

  private getDigitsArray(arr:string[]){

   return  arr.map( e => parseInt(e))
  }
  
}
export interface IStringCalculator{
  add(input:string):number


}
