export const enum Result{
  Fizz,
  Buzz,
  FizzBuzz
}


export interface IFizzBuzz{
  execute(digit:number):Result|string
}

export class FizBuzz implements IFizzBuzz{
    execute(digit: number): string | Result {
    
          
          if( this.isMultipleOfN(digit,15))
            return Result.FizzBuzz

          if( this.isMultipleOfN(digit,3))
            return Result.Fizz

          if( this.isMultipleOfN(digit,5))
            return Result.Buzz
        
          return digit.toString()

    }

     isMultipleOfN =(digit: number,n:number)=>{
      return digit%n==0
    }


}