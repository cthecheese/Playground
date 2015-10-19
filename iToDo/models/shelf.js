var knex = require('knex')({
  client: 'postgresql',
  connection: {
    host     : 'localhost',
    port: '5432',
    user     : 'chunter',
    database : 'itodo',
    charset  : 'utf8'
  }
})

module.exports = require('bookshelf')(knex)
