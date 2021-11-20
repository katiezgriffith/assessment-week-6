const {shuffleArray} = require('./utils')

describe('shuffleArray should return an array', () => {
    let result = shuffleArray('arrCopy')
    test('Array Copy', () => expect(result).toEqual('arrCopy'))

})

describe('the array has j in it', () => {
    let result = shuffleArray('arrCopy')
    test("Contaains j", () => expect(result).toContain('j'))
   
});