const db = require('../data/dbConfig');

const Games = require('./gameModel');

describe('game series',()=>{
    beforeEach(async ()=>{
        await db('games').truncate();
    })
})

describe('insert()',()=>{
    it('should insert the game into the db',async()=>{
        await Games.insert({name:'Call of Duty:Cold War'}) //using the api
        const games = await db('games')
        expect(games).toHaveLength(1)
    })
    it('should insert the game into the db',async()=>{
        await Games.insert({name:'Call of Duty:Black Ops'}) //using the api
        await Games.insert({name:'Call of Duty:Modern Warefare'})
        expect(games).toHaveLength(2)
      
    })

    
})

describe('update()',()=>{
    it('should update a game in the db',()=>{
        return Games.update(1, {name:'007'})
        .then(game =>{
            expect(car).toBe(0);
        })
    })
})

describe('getAll()',()=>{
    it('should get all games in the db',()=>{
        return Games.getAll()
        .then(game =>{
            console.log(games)
            expect(games).toHaveLength(0)
        })
    })
})

describe('findById()',()=>{
    it('should get all games in the db by its id',()=>{
        return Games.findById()
        .then(game =>{
            console.log(games)
            expect(games).toHaveLength(0)
        })
    })
})

describe('delete()',()=>{
    it('should delete a game in the db',()=>{
        return Games.remove(1)
        .then(game =>{
            expect(games).toBe(0)
        })
    })
})