exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('events')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {
          id: 1,
          category_id: 2,
          user_id: 1,
          title: 'Fortnite',
          description: 'Whats your highest kills on solo ?',
          date: '2020-10-19 04:44:00-04'
        },
        {
          id: 2,
          category_id: 3,
          user_id: 2,
          title: 'Best Products?',
          description: 'I need my hair to grow',
          date: '2020-10-19 11:50:00-04'
        },
        {
          id: 3,
          category_id: 4,
          user_id: 2,
          title: 'Favorite NBA team',
          description: 'Houston Rockets',
          date: '2020-10-5 01:12:00-04'
        },
        {
          id: 4,
          category_id: 5,
          user_id: 2,
          title: 'Favorite Food?',
          description: 'King Crab legs',
          date: '2020-10-4 05:10:00-04'
        },
        {
          id: 5,
          category_id: 2,
          user_id: 2,
          title: 'Best COD?',
          description: 'BO3',
          date: '2020-10-3 10:29:00-04'
        },
        {
          id: 6,
          category_id: 1,
          user_id: 2,
          title: 'How are you dealing with COVID',
          description: 'Small Talk',
          date: '2020-10-2 03:33:00-04'
        }
      ])
    })
}
