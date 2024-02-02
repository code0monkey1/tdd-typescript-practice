export class StringCalculator implements IStringCalculator{
  add(input: string): number {

    const trimmedInput=input.trim()
    
    if( (trimmedInput).length==0)  return 0
    
    return parseInt(input)
  }
  
}
export interface IStringCalculator{
  add(input:string):number


}
