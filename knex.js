const path = require('path');
require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DEV_DB_HOST,
      port: process.env.DEV_DB_PORT,
      user: process.env.DEV_DB_USER,
      password: process.env.DEV_DB_PSWD,
      database: process.env.DEV_DB_NAME,
<<<<<<< HEAD
    }
  }
}
=======
    },
>>>>>>> Adds knex, fixes issue with modals
