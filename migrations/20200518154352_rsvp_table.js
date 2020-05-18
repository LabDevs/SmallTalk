exports.up = function (knex) {
  return knex.schema.createTable('rsvp', table => {
    table.increments().primary()
    table
      .integer('category_id')
      .references('id')
      .inTable('categories')
    table
      .integer('event_id')
      .references('id')
      .inTable('events')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('rsvp')
}
