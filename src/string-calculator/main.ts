export class StringCalculator implements IStringCalculator{
  add(input: string): number {
    
    if(input.trim()=='')  return 0
    
    return parseInt(input)
  }
  
}
export interface IStringCalculator{
  add(input:string):number
}
