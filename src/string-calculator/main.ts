export class StringCalculator implements IStringCalculator{
  add(input: string): number {

    const trimmed=input.trim()

    if( (trimmed).length==0)  return 0

    // more than 1 digit
    const sum = trimmed.split(',')
                      .map( e => parseInt(e))
                      .reduce((current:number,prev:number)=> prev+=current)

    return sum

  }

  
}
export interface IStringCalculator{
  add(input:string):number


}
