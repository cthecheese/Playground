var bookshelf = require('./shelf')
var User = require('./Users')

var Task = bookshelf.Model.extend({
  tableName: 'Tasks',
  AuthorID: function(){
    return hasOne(User)
  },
  AssignedTo: function(){
    return belongsTo(User)
  }
})

module.exports = Task
