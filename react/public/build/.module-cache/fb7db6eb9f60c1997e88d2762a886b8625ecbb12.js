var Title = React.createClass({displayName: "Title",
  render: function(){
    return(
      React.createElement("h1", null, "this.props.title")
    );
  }
});
