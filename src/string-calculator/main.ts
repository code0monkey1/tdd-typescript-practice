export class StringCalculator implements IStringCalculator{
  add(input: string): number {

    const trimmedInput=input.trim()

    if( (trimmedInput).length==0)  return 0

    const arr = input.split(',')

    let sum=0

    for ( let a of arr) sum+= parseInt(a)
    
    return sum
  }
  
}
export interface IStringCalculator{
  add(input:string):number


}
