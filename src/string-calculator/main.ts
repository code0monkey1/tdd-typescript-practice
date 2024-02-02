export class StringCalculator implements IStringCalculator{
  add(input: string): number {

    const trimmedInput=input.trim()

    if( (trimmedInput).length==0)  return 0

    // more than 1 digit
    const sum = this.getSum(input.split(','))

    return sum

  }

  private getSum(arr:string[]){

   return arr.reduce((prev:number,current:string)=> prev+=parseInt(current),0)

  }
  
}
export interface IStringCalculator{
  add(input:string):number

}
