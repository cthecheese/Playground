var UserForm = React.createClass({displayName: "UserForm",
  render: function(){
    return (
      React.createElement(Title, {title: this.props.title})
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

React.render(React.createElement(Login, {title: "Register"}), document.body);
