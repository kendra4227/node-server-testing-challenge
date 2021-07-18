
exports.up = function(knex) {
    return knex.schema.createTable('games', tbl =>{
        tbl.increments();
        tbl.string('name',255);
        
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExist('games');
  
};
