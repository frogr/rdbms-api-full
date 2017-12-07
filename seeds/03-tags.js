exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('tags').insert([
        { id: 1, tag: 'dumb' },
        { id: 2, tag: 'funny' },
        { id: 3, tag: 'great post' }
      ]);
    });
};
