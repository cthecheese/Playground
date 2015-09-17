var Title = React.createClass({displayName: "Title",
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },
  render: function(){
    return(
      React.createElement("h1", null, this.props.title + " " + this.props.number)
    );
  }
});

React.render(React.createElement(Title, {title: 20}), document.getElementById('propValidation'));
