exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('rsvp')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('rsvp').insert([
        { id: 1, category_id:2,user_id: 1,event_id: 3, title:'Fortnite',description:'Whats your highest kills on solo ?',date:'2020-10-19'},
        { id: 2,category_id:3 ,user_id: 1, event_id: 4, title:'Best Products?',description:'I need my hair to grow',date:'2020-10-19'},
        { id: 3, category_id:4,user_id: 1, event_id: 5, title:'Favorite NBA team',description:'Houston Rockets',date:'2020-10-5'},
        { id: 1, category_id:5,user_id: 2, event_id: 6, title:'Favorite Food?',description:'King Crab legs',date:'2020-10-4'},
        { id: 2, category_id:2,user_id: 2, event_id: 7, title:'Best COD?',description:'BO3',date:'2020-10-3'},
        { id: 3, category_id:1,user_id: 2, event_id: 8, title:'How are you dealing with COVID', description:'Small Talk',date:'2020-10-2'},
      ])
    })
}
