export const enum Result{
  Fizz,
  Buzz,
  FizzBuzz
}


export interface FizzBuzz{
  execute(n:Number):Result|Error
}