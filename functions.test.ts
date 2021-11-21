const {shuffleArray} = require('./utils')

describe('shuffleArray should return an array', () => {
    let result = shuffleArray([1,2,3,4,5])
    test('Return Array', () => expect(result).toReturn())

})

describe('the array has j in it', () => {
    let result = shuffleArray("Array")
    test("Contains j", () => expect(result).toContain('j'))
   
})

