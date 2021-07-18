require('dotenv').config();
const db = require('../data/dbConfig');

module.exports={
    insert,
    update,
    remove,
    getAll,
    findById,

};

async function insert(game){
    return db('games').insert(game,'id');
}
function update(id,changes){
    return db('games')
    .where('id',id)
    .update(changes)

}

function remove(id){
    return db('games')
    .where('id',id)
    .del();
}

function getAll(){
    return db('games');

}

function findById(id){
    return db('games')
    .where({id:Number(id)});
}