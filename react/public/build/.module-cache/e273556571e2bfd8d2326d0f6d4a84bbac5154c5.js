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
      React.createElement("input", {type: "text", value: value, onChange: this.changeName})
    );
  }
});

var UncontrolledInput = React.createClass({displayName: "UncontrolledInput",
  render: function(){
    return (
      React.createElement("input", {type: "text"})
    );
  }
});

React.render(React.createElement(UserInputForm, null), document.getElementById('ControlledInput'));
