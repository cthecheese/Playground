var userInputForm = React.createClass({displayName: "userInputForm",
  getInitialState: function(){
    return {
      name: "Colby Hunter"
    }
  },
  changeName: function(e){
    this.setState({name: e.target.value});
  }
})
