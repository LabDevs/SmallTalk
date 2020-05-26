exports.up = function (knex) {
  return knex.schema.createTable('rsvp', table => {
    table.increments().primary()
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
    table
      .integer('event_id')
      .references('id')
      .inTable('events')
      .onDelete('CASCADE')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('rsvp')
}
