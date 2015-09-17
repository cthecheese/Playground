/*
  titleProp is me just playing around with Reacts
  features.. I'll explain more further down..
  For now.. Just forget it exists.
*/
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
/*
  This is where you render out the two forms.
*/

// This is technically a registration form. But I was playing around with
// JSX's implementation of ES6's spread notation (The '...' in {...titleProp})
// titleProp is up at the very top (:1-3)
React.render(React.createElement(AccountForm, React.__spread({},  titleProp, {register: "true"})), document.getElementById('registerForm'));

// This is taking in a few "HTML attributes".. Though they are actually properties
// This is where this.props comes in.
// console.log(this.props.output); Where this would be refering the the code
// below (:68) would output "Login to your existing account"
React.render(React.createElement(AccountForm, {title: "Login to your existing account", description: "Login Form", register: "false"}), document.getElementById('loginForm'));
