# Age Calculator TDD Kata

## Rules

1. Given the `birthDate` of type `Date` and `targetDate` of type `Date` , give the age of the person

### Equivalence Partitions  :  ( 4 equivalence partitions in total )

1.When the `birthDate` is in a leap year
1.When the `year` in the `birthDate` is same as  the `year` in the `targetDate`
   - a. When the `targetMonth` is same
     - b. When the `targetDay` is same
     - c. When the `targetDay` is before
     - d. When the `targetDay` is after
   - b. When the `targetMonth` is before
   - c. When the `targetMonth` is after
