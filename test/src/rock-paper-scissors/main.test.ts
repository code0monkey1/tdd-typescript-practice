import { MOVE, RESULT, RockPaperScissors } from "../../../src/rock-paper-scissors/main";

describe('RockPaperScissors',()=>{

       describe('play',()=>{

           describe('draw', () => {
             
               it.each([{p1:"PAPER",p2:"PAPER"},{p1:"ROCK",p2:"ROCK"},{p1:"SCISSORS",p2:"SCISSORS"}])(`returns "DRAW" when p1 is $p1 and p2 is $p2`,()=>{
                     
                   //arrange
    
                   const sut = new RockPaperScissors().play
                   const expected:RESULT='DRAW'
    
                   const p1:MOVE='PAPER'
                   const p2:MOVE='PAPER'
    
    
                   //act
    
                   const actual = sut(p1,p2)
    
    
                   //assert
                   expect(actual).toBe(expected)
               })
           })
           

       })
})