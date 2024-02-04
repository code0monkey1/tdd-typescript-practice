
export interface IAgeCalculator{
   execute(birthDate:Date,targetDate:Date):number |Error
}

export class AgeCalculator implements IAgeCalculator{
  execute(birthDate: Date,targetDate:Date): number |Error {
    
    if(birthDate>targetDate)
        throw new Error("Invalid : Target Date is before Birth Date")
    
    const ms = targetDate.getTime() - birthDate.getTime();
    
    let  years = this.getYears(ms) ;

    if( this.isLeapDay(birthDate))
       years= years/ 4

    return Math.floor( years)

  }

  private isLeapDay(birthDate: Date) {
    return this.isLeapYear(birthDate.getFullYear()) &&
      birthDate.getDate() == 29 &&
      birthDate.getMonth() + 1 == 2
  }

  private getYears(ms:number){
   return  ms / (1000 * 60 * 60 * 24 * 365) 
  }

 private isLeapYear(year:number) {
      if (year % 4 === 0) {
        if (year % 100 === 0) {
          if (year % 400 === 0) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      } else {
        return false;
      }
  }

  
}