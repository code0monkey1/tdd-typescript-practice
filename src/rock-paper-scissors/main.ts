export type MOVE = "ROCK"|"PAPER"|"SCISSORS"

export type RESULT="DRAW"|"WIN"|"LOSE"

export class RockPaperScissors{

    play(p1:MOVE,p2:MOVE):RESULT{
      
      let result:RESULT ='DRAW'

      if (p1==p2){
        result='DRAW'
      }

    return result
  }
}

