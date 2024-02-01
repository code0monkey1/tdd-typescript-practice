import { MOVE, RESULT, RockPaperScissors } from "../../../src/rock-paper-scissors/main";

describe('RockPaperScissors',()=>{

       describe('play',()=>{

           describe('draw', () => {
               
               const scenarios : {p1:MOVE,p2:MOVE}[] =[{p1:"PAPER",p2:"PAPER"},{p1:"ROCK",p2:"ROCK"},{p1:"SCISSORS",p2:"SCISSORS"}]

               it.each(scenarios)(`returns "DRAW" when p1 is $p1 and p2 is $p2`,({p1,p2})=>{
                     
                   //arrange
    
                   const sut = new RockPaperScissors().play
                   const expected:RESULT='DRAW'
    
    
                   //act
    
                   const actual = sut(p1,p2)
    
    
                   //assert
                   expect(actual).toBe(expected)
               })
           })

           describe('p1 wins',()=>{

              const scenarios : {p1:MOVE,p2:MOVE}[] =[
                {p1:"PAPER",p2:"ROCK"},
                {p1:"ROCK",p2:"SCISSORS"},
                {p1:"SCISSORS",p2:"PAPER"}]
             it.each(scenarios)(`returns "DRAW" when p1 is $p1 and p2 is $p2`,({p1,p2})=>{
                     
                   //arrange
    
                   const sut = new RockPaperScissors().play
                   const expected:RESULT='WIN'

    
                   //act
    
                   const actual = sut(p1,p2)
    
    
                   //assert
                   expect(actual).toBe(expected)
               })


           })
            describe.skip('p1 loses',()=>{

              const scenarios : {p1:MOVE,p2:MOVE}[] =[
                {p2:"PAPER",p1:"ROCK"},
                {p1:"ROCK",p2:"SCISSORS"},
                {p1:"SCISSORS",p2:"PAPER"}]
             it.each(scenarios)(`returns "DRAW" when p1 is $p1 and p2 is $p2`,({p1,p2})=>{
                     
                   //arrange
    
                   const sut = new RockPaperScissors().play
                   const expected:RESULT='LOSE'

    
                   //act
    
                   const actual = sut(p1,p2)
    
    
                   //assert
                   expect(actual).toBe(expected)
               })



           })
           
           

       })
})