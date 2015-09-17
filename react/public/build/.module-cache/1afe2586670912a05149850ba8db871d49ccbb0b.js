/*
  Once again we are looking at a lot of code that should
  look familiar. This will be the first time I actually
  use getInitialState.. So let's explain that real quick.

  A component has both properties and a state. States are
  there for when things need to stay dynamic (able to change).

  Without getting into too much detail, you should use States
  minimally.

  You also don't need getInitialState to set a state, it's just
  what I decided to do for the sake of this code testing.
*/


/*
  ControlledInput:

  getInitialState will create a state of "name" set to "Colby Hunter"
  changeName is a method to ensure that the changes made in the input
    are MAINTAINED (This is a keyword specific to this project.. Remember it!)
  onChange is a React level event handler and should be used over onInput (a DOM
    level event handler)

  What it does:

  The ControlledInput component is an example of a Controlled Component.
  A Controlled Component allows you to maintain a specific value, no matter what
    the user types.
  I didn't feel the need to have a Controlled Component that maintained it's value
    because the premise is simple. They can type whatever they want, but the value
    would never change.
  Instead, ControlledInput changes the value as the user makes edits.
*/
var ControlledInput = React.createClass({displayName: "ControlledInput",
  getInitialState: function(){
    return {
      name: "Colby Hunter"
    }
  },
  changeName: function(e){
    this.setState({name: e.target.value});
  },
  render: function(){
    var value = this.state.name;
    return (
      React.createElement("input", {className: "controlledTarget", type: "text", value: value, onChange: this.changeName})
    );
  }
});

/*
  UncontrolledInput:

  We lost a lot of code when we went uncontrolled.. But what does this actually
    mean?
  Well, it means that we didn't set an inital value at all, so whatever the user
    types in, that is what the value will be.
*/
var UncontrolledInput = React.createClass({displayName: "UncontrolledInput",
  render: function(){
    return (
      React.createElement("input", {className: "uncontrolledTarget", type: "text"})
    );
  }
});

/*
  ControlledButNotMaintained:

  This is the interesting one. So we go back to having a Controlled Component
    but you'll notice there is no onChange event. I did this because I wanted to
    see what would end up happening.
*/
var ControlledButNotMaintained = React.createClass({displayName: "ControlledButNotMaintained",
  getInitialState: function(){
    return {
      name: "John Doe"
    }
  },
  render: function(){
    var value = this.state.name;
    return (
      React.createElement("input", {className: "controlledButNotMaintainedTarget", value: value, type: "text"})
    );
  }
});

var UncontrolledDefaultValue = React.createClass({displayName: "UncontrolledDefaultValue",
  render: function(){
    var value = this.props.name;
    return (
      React.createElement("input", {className: "UncontrolledDefaultValueTarget", defaultValue: value, type: "text"})
    );
  }
});

React.render(React.createElement(ControlledInput, null), document.getElementById('ControlledInput'));
React.render(React.createElement(UncontrolledInput, null), document.getElementById('UncontrolledInput'));
React.render(React.createElement(ControlledButNotMaintained, null), document.getElementById('ControlledButNotMaintained'));
React.render(React.createElement(UncontrolledDefaultValue, {name: "Jane Doe"}), document.getElementById('DefaultAndUncontrolled'));
