exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, name: 'frog' },
        { id: 2, name: 'foxxo' },
        { id: 3, name: 'covert' }
      ]);
    });
};
