exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('rsvp')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('rsvp').insert([
        { id: 1, userId: 1, eventId: 9 },
        { id: 2, userId: 1, eventId: 10 },
        { id: 3, userId: 1, eventId: 11 }
      ])
    })
}
