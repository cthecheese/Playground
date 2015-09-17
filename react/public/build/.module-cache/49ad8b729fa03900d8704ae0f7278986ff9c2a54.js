var AccountForm = React.createClass({displayName: "AccountForm",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement(Title, {title: this.props.title}, 
          React.createElement(Title.Description, null)
        ), 
        React.createElement(UserForm, {register: this.props.register})
      )
    );
  }
});

var Title = React.createClass({displayName: "Title",
  render: function(){
    return (
      React.createElement("h1", null, this.props.title)
    );
  }
});

Title.Description = React.createClass({displayName: "Description",
  render: function(){
    return (
      React.createElement("h2", null, "This describes the title")
    );
  }
});

var UserForm = React.createClass({displayName: "UserForm",
  registerUser: function(){
    console.log("Register User Here");
  },
  loginUser: function(){
    console.log("Login User Here");
  },
  render: function(){
    return (
      React.createElement("form", {onSubmit: this.props.register == "true" ? this.registerUser() : this.loginUser()}, 
        React.createElement("input", {placeholder: "email@example.com"}), 
        React.createElement("input", {placeholder: "Password..."}), 
        React.createElement("input", {type: "submit", value: "Submit"})
      )
    );
  }
});

React.render(React.createElement(AccountForm, {title: "Register to get an account", register: "true"}), document.getElementById('registerForm'));
React.render(React.createElement(AccountForm, {title: "Login to your existing account", register: "false"}), document.getElementById('loginForm'));
