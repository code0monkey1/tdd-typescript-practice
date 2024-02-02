export class StringCalculator implements IStringCalculator{
  add(input: string): number {
    
    if( (input.trim()).length==0)  return 0
    
    return parseInt(input)
  }
  
}
export interface IStringCalculator{
  add(input:string):number


}
