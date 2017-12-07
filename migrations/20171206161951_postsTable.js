exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', t => {
    t.increments('id');
    t
      .integer('userId')
      .references('id')
      .inTable('users');
    t.string('text').unique('uq_text');
    t.timestamp('createdAt').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts');
};
