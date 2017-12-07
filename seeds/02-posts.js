exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('posts').insert([
        { id: 1, userId: 1, text: 'ribbit ribbit' },
        { id: 2, userId: 2, text: "i don't know what I say!" },
        { id: 3, userId: 3, text: 'frog is my favourite dude haha!' }
      ]);
    });
};
