exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', t => {
    t.increments('id');
    t.string('name', 128).notNullable();
    t.timestamp('createdAt').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
