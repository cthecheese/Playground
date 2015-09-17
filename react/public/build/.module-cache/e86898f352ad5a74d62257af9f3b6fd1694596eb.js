// Don't mind this right now.. Just keep moving on..
var colbyValidator = function(props, propName, componentName){
  if(props[propName] != "Colby"){
    return new Error('Get my name right bro.. it is not ' + props[propName] + '!');
  }
}
/*
  We're going to stick to our Title component, because why not.

  This component has the standard render, but also something called propTypes and getDefaultProps

  propTypes is something that React looks for. It allows you to have validations
  on the properties that are being passed in. There is a boat load of premade
  propType validators. You can find them here:

  https://facebook.github.io/react/docs/reusable-components.html#prop-validation

  getDefaultProps is a function React looks for to ensure that each property specified
  has a value, even if one isn't given.. Hence the default...

  But before you go off looking at all of this stuff, let's disect this..
*/
var Title = React.createClass({displayName: "Title",
  getDefaultProps: function(){
    return {
      lastName: "Hunter"
    }
  },
  propTypes: {
    /*
      The basic idea is to say propName: propTypeValidator
      So for the property "title", it has to be a string.
      Notice the .isRequired? Of course you did you sly dog you... ;)

      isRequired does exactly what it says.. It React expect that the property exists
      Note: This is nearly pointless to do if a default value already exists!
    */
    title: React.PropTypes.string.isRequired,
    /*
      This one is a bit special.. Notice how it is a function instead?
      React allows you to make your own types of validations, the function
      signature must be exactly the way it is though! REMEMBER THIS!
    */
    number: function(props, propName, componentName){
      if(!/42/.test(props[propName])){
        return new Error('Was expecting 42.. Do you not understand the universe?!');
      }
    },
    firstName: colbyValidator().isRequired
  },
  render: function(){
    return(
      React.createElement("div", null, 
        React.createElement("h1", null, this.props.title + " " + this.props.number), 
        React.createElement("p", null, this.props.firstName + " " + this.props.lastName)
      )
    );
  }
});

React.render(React.createElement(Title, {title: "The Universe:", number: 40, firstName: "Colby"}), document.getElementById('propValidationWrongNumber'));
React.render(React.createElement(Title, {number: 42}), document.getElementById('propValidationNoTitle'));
React.render(React.createElement(Title, {title: "The Universe:", number: 42}), document.getElementById('propValidationNoFirstName'));
