var titleProp = {};
titleProp.title = "TitleName";
titleProp.description = "TitleDescription";

var Title = React.createClass({displayName: "Title",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, this.props.title), 
        React.createElement("span", null, this.props.children)
      )
    );
  }
});

Title.Description = React.createClass({displayName: "Description",
  render: function(){
    return (
      React.createElement("h2", null, this.props.description)
    );
  }
});

var AccountForm = React.createClass({displayName: "AccountForm",
  render: function(){
    var Form = Title;
    return (
      React.createElement("div", null, 
        React.createElement(Form, {title: this.props.title}, 
          React.createElement(Form.Description, {description: this.props.description})
        ), 
        React.createElement(UserForm, {register: this.props.register})
      )
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

React.render(React.createElement(AccountForm, React.__spread({},  titleProp, {register: "true"})), document.getElementById('registerForm'));
React.render(React.createElement(AccountForm, {title: "Login to your existing account", description: "Login Form", register: "false"}), document.getElementById('loginForm'));
