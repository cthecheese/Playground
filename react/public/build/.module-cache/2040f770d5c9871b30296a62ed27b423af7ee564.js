var UserForm = React.createClass({displayName: "UserForm",
  render: function(){
    return (
      React.createElement("h1", null, "Hello!")
    );
  }
});

var Title = React.createClass({displayName: "Title",
  render: function(){
    return (
      React.createElement("h1", null, this.props.title)
    )
  }
});

React.render(React.createElement(Login, null), document.body);
