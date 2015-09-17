var data = [
  {author: "RadBrad", text: "I had a fad and it's too bad that everyone is so sad too see RadBrad's Fad fade away in the shade"},
  {author: "CTheCheese", text: "It's time to listen to CTheCheese, you see that's me and I'm free to speak about how your rhymes are weak"}
]

var CommentBox = React.createClass({displayName: "CommentBox",
  getInitialState: function(){
    return {data: []};
  },
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
    var commentNodes = this.props.data.map(function(comment){
      return(
        React.createElement(Comment, {author: comment.author}, 
          comment.text
        )
      );
    });
    return(
      React.createElement("div", {className: "commentList"}, 
        commentNodes
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
  React.createElement(CommentBox, {data: data}),
  document.getElementById('content')
);
