
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colName: 'Call of Duty'},
        {id: 2, colName: 'Fortnite'},
        {id: 3, colName: 'Halo'}
      ]);
    });
};
