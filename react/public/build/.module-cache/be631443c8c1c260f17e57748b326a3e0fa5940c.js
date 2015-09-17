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
      React.createElement("input", {className: "controlledButNotMaintainedTarget", type: "text"})
    );
  }
})

React.render(React.createElement(ControlledInput, null), document.getElementById('ControlledInput'));
React.render(React.createElement(UncontrolledInput, null), document.getElementById('UncontrolledInput'));
