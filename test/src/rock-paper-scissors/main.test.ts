import { IRockPaperScissors, MOVE, RESULT, RockPaperScissors, SCENARIO } from "../../../src/rock-paper-scissors/main";

describe.skip('rock-paper-scissors',()=>{

       describe('play',()=>{

           describe('draw', () => {
               
               const scenarios : SCENARIO[] =[{p1:MOVE.PAPER,p2:MOVE.PAPER},{p1:MOVE.ROCK,p2:MOVE.ROCK},{p1:MOVE.SCISSORS,p2:MOVE.SCISSORS}]

               it.each(scenarios)(`returns "DRAW" when p1 is $p1 and p2 is $p2`,({p1,p2})=>{
                     
                   //arrange
                   const sut =createRockPaperScissors()

                   const expected=RESULT.DRAW
    
                   //act
                   const actual = sut.play(p1,p2)
    
                   //assert
                   expect(actual).toBe(expected)
               })
           })

           describe('p1 wins',()=>{

              const scenarios : SCENARIO[] =[
                {p1:MOVE.PAPER,p2:MOVE.ROCK},
                {p1:MOVE.ROCK,p2:MOVE.SCISSORS},
                {p1:MOVE.SCISSORS,p2:MOVE.PAPER}]
             it.each(scenarios)(`returns "DRAW" when p1 is $p1 and p2 is $p2`,({p1,p2})=>{
                     
                   //arrange
                   const sut = createRockPaperScissors()
                   const expected=RESULT.WIN

                   //act
                   const actual = sut.play(p1,p2)
    
                   //assert
                   expect(actual).toBe(expected)
               })


           })
            describe('p2 loses',()=>{

              const scenarios :SCENARIO[] =[
                {p1:MOVE.ROCK,p2:MOVE.PAPER},
                {p1:MOVE.SCISSORS,p2:MOVE.ROCK},
                {p1:MOVE.PAPER,p2:MOVE.SCISSORS}]
             it.each(scenarios)(`returns "LOSE" when p1 is $p1 and p2 is $p2`,({p1,p2})=>{
                     
                   //arrange
                   const sut = createRockPaperScissors()
                   const expected=RESULT.LOSE

                   //act
                   const actual = sut.play(p1,p2)
    
    
                   //assert
                   expect(actual).toBe(expected)
               })


           })
           
       })
})

let createRockPaperScissors=():IRockPaperScissors=>{

    return new RockPaperScissors()
  
}