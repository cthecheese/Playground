var userInputForm = React.createClass({displayName: "userInputForm",
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
    return(
      React.createElement("input", {type: "text", value: value, onChange: this.changeName})
    );
  }
})
