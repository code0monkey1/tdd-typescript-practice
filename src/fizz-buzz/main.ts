export const enum Result{
  Fizz,
  Buzz,
  FizzBuzz,
  Wizz,
  WizzFizz,
  WizzBuzz
}


export interface IFizzBuzz{
  execute(digit:number):Result|string
}

export class FizBuzz implements IFizzBuzz{
    execute(digit: number): string | Result {
         
          if ( this.isPrime(digit) )
              return Result.Wizz

          if( this.isMultipleOfN(digit,15))
            return Result.FizzBuzz

          if( this.isMultipleOfN(digit,3))
            return Result.Fizz

          if( this.isMultipleOfN(digit,5))
            return Result.Buzz
        
          return digit.toString()

    }

     isMultipleOfN =(digit: number,n:number):boolean=>{
      return digit%n==0
    }

    isPrime=( digit:number):boolean=>{

      for( let i =2;i<=Math.sqrt(digit);i++)
         if (digit % i ==0)
              return false
      

      return true

    }




}