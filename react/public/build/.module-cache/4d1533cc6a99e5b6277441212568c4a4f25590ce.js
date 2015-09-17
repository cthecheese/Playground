var CommentBox = React.createClass({displayName: "CommentBox",
  render: function(){
    return (
      React.createElement("div", {className: "commentBox"}, 
        "Hello! I am a CommentBox!"
      )
    );
  }
});

var CommentList = React.createClass({displayName: "CommentList",
  render: function(){
    return (
      React.createElement("div", {className: "commentList"}, 
        "Hello! I am a CommentList!"
      )
    );
  }
})

React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
