export type MOVE = "ROCK"|"PAPER"|"SCISSORS"

export type RESULT="DRAW"|"WIN"|"LOSE"

export class RockPaperScissors{

    play(p1:MOVE,p2:MOVE):RESULT{

      let winning:{p1:MOVE,p2:MOVE}[]=[
        {p1:"PAPER",p2:"ROCK"},
        {p1:"PAPER",p2:"ROCK"},
        {p1:"PAPER",p2:"ROCK"}
      ]

      if (p1==p2)
        return 'DRAW'
      else if ( winning.includes({p1,p2}))
        return "WIN"

      return 'LOSE'

  }
}

