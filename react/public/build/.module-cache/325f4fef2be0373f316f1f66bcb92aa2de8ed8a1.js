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

var UncontrolledInput = React.createClass({displayName: "UncontrolledInput",
  render: function(){
    return (
      React.createElement("input", {className: "uncontrolledTarget", type: "text"})
    );
  }
});

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
})

React.render(React.createElement(ControlledInput, null), document.getElementById('ControlledInput'));
React.render(React.createElement(UncontrolledInput, null), document.getElementById('UncontrolledInput'));
React.render(React.createElement(ControlledButNotMaintained, null), document.getElementById('ControlledButNotMaintained'));
