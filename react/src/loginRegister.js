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

var Title = React.createClass({ // <-- Notice we are working in a json object
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
      <div>
        <h1>{this.props.title}</h1>
        <span>{this.props.children}</span>
      </div>
    );
  }
});

/*
  This is where you make your child elements. Remember when I said
  this.props.children allowed you to have children? This is how you
  create one.
*/
Title.Description = React.createClass({
  render: function(){
    return (
      <h2>{this.props.description}</h2>
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
var AccountForm = React.createClass({
  render: function(){
    var Form = Title; // This allows us to have access to Title's potential child elements
    return (
      <div>
        <Form title={this.props.title}>
          <Form.Description description={this.props.description}/> //Hey! We see Description coming into play!
        </Form>
        <UserForm register={this.props.register} /> // a React component we make later on down the line.
        // Notice that it has a this.props.register? That's important.. Remember that.
      </div>
    );
  }
});

// Now we're getting to the main stuff. This is what holds onto the input boxes!
var UserForm = React.createClass({
  // Faux method I made for testing
  registerUser: function(){
    console.log("Register User Here");
  },
  // Same thing with this one
  loginUser: function(){
    console.log("Login User Here");
  },
  render: function(){
    return (
      // Notice that I'm able to do a conditional to see which method is used
      <form onSubmit={this.props.register == "true" ? this.registerUser() : this.loginUser()}>
        <input placeholder="email@example.com" />
        <input placeholder="Password..." />
        <input type="submit" value="Submit" />
      </form>
    );
  }
});
/*
  This is where you render out the two forms.
*/

// This is technically a registration form. But I was playing around with
// JSX's implementation of ES6's spread notation (The '...' in {...titleProp})
// titleProp is up at the very top (:6-7). Hopefully you didn't forget about it.
// Notice that it has register="true" as a property? This get's passed down from
// component to component: AccountForm -> UserForm -> <form onSubmit>
// Notice that React.render only takes two arguments:
// React.render(ReactComponenet, TargetElement); This is why AccountForm was required
React.render(<AccountForm {...titleProp} register="true" />, document.getElementById('registerForm'));

// This is taking in a few "HTML attributes".. Though they are actually properties
// This is where this.props comes in.
// console.log(this.props.output); Where this would be refering the the code
// below would output "Login to your existing account"
React.render(<AccountForm title="Login to your existing account" description="Login Form" register="false" />, document.getElementById('loginForm'));
