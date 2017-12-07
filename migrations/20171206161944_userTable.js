exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', t => {
    t.increments('id');
    t.string('name', 128).notNullable();
    t.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
