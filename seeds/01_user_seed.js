const bcrypt = require('bcrypt')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      //Encrypts the password
      const saltRounds = 8
      return bcrypt.hash(process.env.SEED_PASS, saltRounds)
    })
    .then(function (password) {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'seal125',
          email: 'wee@woo.com',
          password: password
        },
        {
          username: 'paulyy',
          email: 'paulyy@herbo.com',
          password: password
        },
        {
          username: 'vibes4evr',
          email: 'dont@t.me',
          password: password
        },
        {
          username: 'ddftw',
          email: 'dd28@dance.com',
          password: password
        },
        {
          username: 'rotaryckikn',
          email: 'and@rice.com',
          password: password
        }
      ])
    })
}
