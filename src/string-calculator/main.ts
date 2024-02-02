export class StringCalculator implements IStringCalculator{
  add(input: string): number {

    const trimmed=input.trim()

    if( (trimmed).length==0)  return 0

    // more than 1 digit
    const sum = trimmed.split(',')
                      .map( e => parseInt(e))
                      .reduce((prev:number,current:number)=> prev+=current,0)

    return sum

  }

  
}
export interface IStringCalculator{
  add(input:string):number


}
