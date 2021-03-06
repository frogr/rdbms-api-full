exports.up = function(knex, Promise) {
  return knex.schema.createTable('tags', t => {
    t.increments('id');
    t.string('tag', 16).unique('uq_tag');
    t.timestamp('createdAt').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tags');
};
