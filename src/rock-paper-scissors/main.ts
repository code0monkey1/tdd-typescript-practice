export type MOVE = "ROCK"|"PAPER"|"SCISSORS"

export type RESULT="DRAW"|"WIN"|"LOSE"

export class RockPaperScissors{

   private winningMoves: { p1: MOVE; p2: MOVE }[] = [
    { p1: "PAPER", p2: "ROCK" },
    { p1: "ROCK", p2: "SCISSORS" },
    { p1: "SCISSORS", p2: "PAPER" },
  ];

    play(p1:MOVE,p2:MOVE):RESULT{

      if (p1==p2)
        return 'DRAW'

      const found = this.winningMoves.find( move =>{
       return  move.p1 == p1 && move.p2==p2
      })

      return found?'WIN':'LOSE'

  }
}

