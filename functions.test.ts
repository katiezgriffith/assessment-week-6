const {shuffleArray} = require('./utils')


    test('id should match', () => {
        const obj = {
        id: '5',
        name: 'Brobot', 
        imgAddress: 'https://robohash.org/brobot',
        health: 95
    };
        expect(obj.id).toEqual('5')

    });

     
    test('name in shuffleArray', () => {
         expect("Crowbar").toContain("bar")
     })





