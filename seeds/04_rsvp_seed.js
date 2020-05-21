exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('rsvp')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('rsvp').insert([
<<<<<<< HEAD:seeds/04_rsvp_seed.js
        { id: 1, user_id: 1, event_id: 4 },
        { id: 2, user_id: 2, event_id: 5 },
        { id: 3, user_id: 1, event_id: 5 },
=======
        { id: 1, user_id: 1, event_id: 2 },
        { id: 2, user_id: 2, event_id: 5 },
        { id: 3, user_id: 1, event_id: 1 },
>>>>>>> 7ca2ddce5f2013597f77436f499e96393659856f:seeds/rsvp_data.js
        { id: 4, user_id: 3, event_id: 6 }
      ])
    })
}
