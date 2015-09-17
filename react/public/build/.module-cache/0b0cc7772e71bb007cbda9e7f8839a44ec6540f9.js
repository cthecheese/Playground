var Title = React.createClass({displayName: "Title",
  propTypes: {
    title: React.PropTypes.string.isRequired,
    theNumber: function(props, propName, componentName){
      if(!/42/.test(props[propName])){
        return new Error('Was expecting 42, received ' + this.props.number + '!');
      }
    }
  },
  render: function(){
    return(
      React.createElement("h1", null, this.props.title + " " + this.props.number)
    );
  }
});

React.render(React.createElement(Title, {title: "The Number 42:", theNumber: 40}), document.getElementById('propValidation'));
