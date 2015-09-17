var AccountForm = React.createClass({displayName: "AccountForm",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement(Title, {title: this.props.title}), 
        React.createElement(UserForm, {handler: this.props.handler})
      )
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

var UserForm = React.createClass({displayName: "UserForm",
  registerUser: function(){
    console.log("Register User Here");
  },
  LoginUser: function(){
    console.log("Login User Here");
  },
  render: function(){
    return (
      React.createElement("form", null, 
        React.createElement("input", {placeholder: "email@example.com"}), 
        React.createElement("input", {placeholder: "Password..."}), 
        React.createElement("input", {type: "submit", value: "Post"})
      )
    );
  }
});

React.render(React.createElement(AccountForm, {title: "Register", handler: "register"}), document.body);
