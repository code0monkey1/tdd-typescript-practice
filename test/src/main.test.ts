import { myFunction } from "../../src/main"

const sut = myFunction

it('return a string',()=>{
    let result = sut()

    expect(result).toBe('a')
})