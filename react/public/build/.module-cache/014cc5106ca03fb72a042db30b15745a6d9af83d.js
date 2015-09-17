// var CommentBox = React.createClass({
//   render: function(){
//     return (
//       <div className="commentBox">
//         Hello! I am a commentBox!
//       </div>
//     );
//   }
// });
//
// React.render(
//   <CommentBox />,
//   document.getElementById('content')
// );

var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        "Hello, world! I am a CommentBox."
      )
    );
  }
});
React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
