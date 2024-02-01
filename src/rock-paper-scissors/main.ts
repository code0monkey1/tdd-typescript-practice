export type MOVE = "ROCK"|"PAPER"|"SCISSORS"

export type RESULT="DRAW"|"WIN"|"LOSE"

export class RockPaperScissors{

    play(p1:MOVE,p2:MOVE):RESULT{

    let  winningMoves:{p1:MOVE,p2:MOVE}[]=[
    {p1:"PAPER",p2:"ROCK"},
    {p1:"ROCK",p2:"SCISSORS"},
    {p1:"SCISSORS",p2:"PAPER"}
  ]

      const found = winningMoves.find( move =>{
       return  move.p1 == p1 && move.p2==p2
      })

      if (p1==p2)
        return 'DRAW'
      else if (found)
        return "WIN"

      return 'LOSE'

  }
}

