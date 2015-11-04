var React = require('react');
var ReactDOM = require('react-dom');

var data = [{
  id: 0,
  description: 'This needs to be done',
  completed: false
}, {
  id: 1,
  description: 'This is already done!',
  completed: true
}, {
  id: 2,
  description: 'This needs to be undone',
  completed: true
}];

var ToDoBox = React.createClass({
  render: function () {
    return React.createElement(
      'div',
      { className: 'todoBox' },
      React.createElement(
        'h1',
        null,
        'Things To Do'
      ),
      React.createElement(ToDoList, { data: this.props.data })
    );
  }
});

var ToDoList = React.createClass({
  render: function () {
    var todoNodes = this.props.data.map(function (todo) {
      return React.createElement(
        ToDoItem,
        { completed: todo.completed, key: todo.id },
        todo.description
      );
    });

    return React.createElement(
      'div',
      { className: 'ToDo-List' },
      todoNodes
    );
  }
});

var ToDoItem = React.createClass({
  toggleComplete: function (e) {
    e.preventDefault();
    console.log('Hello!');
  },
  render: function () {
    return React.createElement(
      'form',
      { className: 'ToDo-Item', id: this.props.key },
      React.createElement('input', { type: 'button', value: this.props.completed === 'true' ? 'Un-Complete' : 'Complete', onClick: this.toggleComplete }),
      React.createElement(
        'span',
        { className: 'Item-Description' },
        this.props.children
      ),
      React.createElement('input', { type: 'button', value: 'Delete!' })
    );
  }
});

$(document).ready(function () {
  ReactDOM.render(React.createElement(ToDoBox, { data: data }), document.getElementById('todo'));
});