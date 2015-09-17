/*
  titleProp is me just playing around with Reacts
  features.. I'll explain more further down..
  For now.. Just forget it exists.
*/
var titleProp = {};
titleProp.title = "TitleName";
titleProp.description = "TitleDescription";

/*
  This is a React Componenet. Imagine this as creating
  a new element to work with (Though realize there is
  a difference between DOM elements and React Components)

  This component is called through rendering <Title>
  You'll see that down the line.
*/

var Title = React.createClass({displayName: "Title", // <-- Notice we are working in a json object
  // render is what React looks for when it comes to output
  render: function(){
    return (
      /*
        Take note that none of these tags are HTML Elements!
        These are all React Components that React has made
        to help simulate DOM elements. They are special

        Notice the this.props.title? This means it expects something like
        <Title title="myTitle">

        And this.props.children? That's actually a special thing that React implemented
        This allows you to have child elements in your components! You'll see that later
      */
      React.createElement("div", null, 
        React.createElement("h1", null, this.props.title), 
        React.createElement("span", null, this.props.children)
      )
    );
  }
});

/*
  This is where you make your child elements. Remember when I said
  this.props.children allowed you to have children? This is how you
  create one.
*/
Title.Description = React.createClass({displayName: "Description",
  render: function(){
    return (
      React.createElement("h2", null, this.props.description)
    );
  }
});


/*
  This is another React Component..
  I'm sure you're familiar with the look by now..
  But there's something special about this one..
  This is what can be considered a wrapper element.
  It calls all the components we want to render
  We'll see why this is necessary later on.
  For now, just realize that this component is very important
*/
var AccountForm = React.createClass({displayName: "AccountForm",
  render: function(){
    var Form = Title; // This allows us to have access to Title's potential child elements
    return (
      React.createElement("div", null, 
        React.createElement(Form, {title: this.props.title}, 
          React.createElement(Form.Description, {description: this.props.description}), " //Hey! We see Description coming into play!"
        ), 
        React.createElement(UserForm, {register: this.props.register}), " // a React component we make later on down the line." + ' ' +
        "// Notice that it has a this.props.register? That's important.. Remember that."
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
