exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('rsvp')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('rsvp').insert([
        { id: 1, user_id: 1, event_id: 9 },
        { id: 2, user_id: 1, event_id: 10 },
        { id: 3, user_id: 1, event_id: 11 }
      ])
    })
}
