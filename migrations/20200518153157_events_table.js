exports.up = function (knex) {
  return knex.schema.createTable('events', table => {
    table.increments().primary()
    table
      .integer('category_id')
      .references('id')
      .inTable('categories')
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
    table.string('title').notNullable()
    table.string('description').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('events')
}
