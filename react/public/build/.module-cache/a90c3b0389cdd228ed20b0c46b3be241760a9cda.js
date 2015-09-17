/*
  We're going to stick to our Title component, because why not.

  This component has the standard render, but also something called propTypes.

  propTypes is something that React looks for. It allows you to have validations
  on the properties that are being passedin.
*/
var Title = React.createClass({displayName: "Title",
  propTypes: {
    title: React.PropTypes.string.isRequired,
    number: function(props, propName, componentName){
      if(!/42/.test(props[propName])){
        return new Error('Was expecting 42.. Do you not understand the universe?!');
      }
    }
  },
  render: function(){
    return(
      React.createElement("h1", null, this.props.title + " " + this.props.number)
    );
  }
});

React.render(React.createElement(Title, {title: "The Universe:", number: 40}), document.getElementById('propValidation'));
