export class StringCalculator implements IStringCalculator{
  add(input: string): number {

    const trimmedInput=input.trim()

    if( (trimmedInput).length==0)  return 0

    // more than 1 digit
    const sum = this.getSum(input.split(','))

    return sum

  }

  private getSum(arr:string[]){

    let res=0

    for ( let a of arr) res+= parseInt(a)
    
    return res
  }
  
}
export interface IStringCalculator{
  add(input:string):number


}
