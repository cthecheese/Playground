var bookshelf = require('./shelf')

var User = bookshelf.Model.extend({
  tableName: 'users',
  tasks: function(){
    return hasMany(Task)
  }
})

module.exports = User
