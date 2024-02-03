export class StringCalculator implements IStringCalculator{
  add(input: string): number {

    let  trimmed=input.trim()

    if( (trimmed).length==0)  return 0

    let splitParams = [",", "\n"];

    if(this.hasCustomDelimiter(trimmed)){

      splitParams=[trimmed[2]]

      trimmed=trimmed.substring(trimmed.indexOf('\n')+1)
    }

    console.log('splitParams : ',splitParams," trimmed : ",trimmed)

    // more than 1 digit
    const sum = trimmed.split(new RegExp(`(${splitParams.join("|")})`))
                      .filter(e => parseInt(e))
                      .map( e => parseInt(e))
                      .reduce((current:number,prev:number)=> prev+=current)

    return sum

  }

  

  private hasCustomDelimiter(trimmed: string) {
    return trimmed.startsWith('\\') && trimmed.indexOf('\n') == 3;
  }
}
export interface IStringCalculator{
  add(input:string):number


}
