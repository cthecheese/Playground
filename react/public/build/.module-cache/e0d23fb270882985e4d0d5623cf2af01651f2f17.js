var data = [
  {author: "RadBrad", text: "I had a fad and it's too bad that everyone is so sad too see RadBrad's Fad fade away in the shade"},
  {author: "CTheCheese", text: "It's time to listen to CTheCheese, you see that's me and I'm free to speak about how your rhymes are weak"}
]

var CommentBox = React.createClass({displayName: "CommentBox",
  render: function(){
    return (
      React.createElement("div", {className: "commentBox"}, 
        React.createElement("h1", null, "Comments"), 
        React.createElement(CommentList, {data: this.props.data}), 
        React.createElement(CommentForm, null)
      )
    );
  }
});

var CommentList = React.createClass({displayName: "CommentList",
  render: function(){
    return (
      React.createElement("div", {className: "commentList"}, 
        React.createElement(Comment, {author: "John Doe"}, "This is a comment"), 
        React.createElement(Comment, {author: "Joe"}, "This is *another* comment")
      )
    );
  }
});

var CommentForm = React.createClass({displayName: "CommentForm",
  render: function(){
    return (
      React.createElement("div", {className: "commentForm"}

      )
    );
  }
});

var Comment = React.createClass({displayName: "Comment",
  render: function(){
    return(
      React.createElement("div", {className: "comment"}, 
        React.createElement("h2", {className: "commentAuthor"}, 
          this.props.author
        ), 
        marked(this.props.children.toString())
      )
    );
  }
});

React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
