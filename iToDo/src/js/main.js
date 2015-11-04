var React = require('react')
var ReactDOM = require('react-dom')

var data = [
{
  id: 0,
  description: 'This needs to be done',
  completed: false
},
{
  id: 1,
  description: 'This is already done!',
  completed: true
},
{
  id: 2,
  description: 'This needs to be undone',
  completed: true
}]

var ToDoBox = React.createClass({
  render: function(){
    return (
      <div className="todoBox">
        <h1>Things To Do</h1>
        <ToDoList data={this.props.data}/>
      </div>
    )
  }
})

var ToDoList = React.createClass({
  render: function(){
    var todoNodes = this.props.data.map(function(todo){
      return (
        <ToDoItem completed={todo.completed} key={todo.id}>
          {todo.description}
        </ToDoItem>
      )
    })

    return (
      <div className="ToDo-List">
        {todoNodes}
      </div>
    )
  }
})

var ToDoItem = React.createClass({
  toggleComplete: function(e){
    e.preventDefault()
    console.log('Hello!')
  },
  render: function(){
    return (
      <form className="ToDo-Item" id={this.props.key}>
        <input type="button" value={this.props.completed === 'true' ? 'Un-Complete' : 'Complete'} onClick={this.toggleComplete} />
        <span className="Item-Description">
          {this.props.children}
        </span>
        <input type="button" value="Delete!" />
      </form>
    )
  }
})

$(document).ready(function() {
  ReactDOM.render(<ToDoBox  data={data}/>, document.getElementById('todo'))
});
