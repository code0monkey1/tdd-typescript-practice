import { MOVE, RESULT, RockPaperScissors } from "../../../src/rock-paper-scissors/main";

describe('RockPaperScissors',()=>{

       describe('play',()=>{

            it('returns `DRAW` when both play same move',()=>{
                  
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