# Age Calculator TDD Kata

## Rules

1. Given the `birthDate` of type `Date` and `targetDate` of type `Date` , give the age of the person

### Equivalence Partitions  :  ( 7 equivalence partitions in total )

1. When Number is 3 , return `WizzFizz`
1. When Number is 5 , return `WizzBuzz`
1. Only a multiple of 3 , except 3 [  9 , 27 , 6 ] , return `Fizz`
1. Only a multiple of 5 , except 5 [  10, 20 , 25 ] , return `Buzz`
1. Multiple of both 5 and 3 [ 15 , 30 , 15 ] , return `FizzBuzz`
1. Number is neither a multiple of 5 , nor a multiple of 3 , return String
1. Number is a Prime Number [ 2 ,3 , 5 ,7 , 11 ] , return `Wizz`
