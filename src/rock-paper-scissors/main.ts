// BETTER to describe as ENUM , if you need to refer them as constant values later in code

export enum MOVE {
  ROCK,
  PAPER,
  SCISSORS
}

export enum RESULT{
  DRAW,
  WIN,
  LOSE
}

export type SCENARIO={
  p1:MOVE,
  p2:MOVE
}

// start with the interface
export interface IRockPaperScissors{

  play(p1:MOVE,p2:MOVE):RESULT

}

// later create the class
export class RockPaperScissors implements IRockPaperScissors{

   private winningMoves: SCENARIO[] = new Array(
    { p1: MOVE.PAPER, p2: MOVE.ROCK},
    { p1: MOVE.ROCK, p2: MOVE.SCISSORS},
    { p1: MOVE.SCISSORS, p2: MOVE.PAPER },
   );

    play(p1:MOVE,p2:MOVE):RESULT{

      if (p1==p2)
        return RESULT.DRAW

      const found = this.winningMoves.find( move =>{
       return  move.p1 == p1 && move.p2==p2
      })

      return found?RESULT.WIN:RESULT.LOSE

  }
}

