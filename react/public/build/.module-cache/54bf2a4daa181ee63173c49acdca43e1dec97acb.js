var data = [
  {author: "RadBrad", text: "I had a fad and it's too bad that everyone is so sad too see RadBrad's Fad fade away in the shade"},
  {author: "CTheCheese", text: "It's time to listen to CTheCheese, you see that's me and I'm free to speak about how your rhymes are weak"}
]

var CommentBox = React.createClass({displayName: "CommentBox",
  getInitialState: function(){
    return {data: []};
  },
  loadCommentsFromServer: function(){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function(){
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function(){
    return (
      React.createElement("div", {className: "commentBox"}, 
        React.createElement("h1", null, "Comments"), 
        React.createElement(CommentList, {data: this.state.data}), 
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
    )
  }
});

var CommentForm = React.createClass({displayName: "CommentForm",
  handleSubmit: function(e) {
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) {
      return;
    }
    // TODO: send request to the server
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';
    return;
  },
  render: function(){
    return (
      React.createElement("div", {className: "commentForm"}, 
        React.createElement("input", {type: "text", placeholder: "Your Name"}), 
        React.createElement("input", {type: "text", placeholder: "Say something..."}), 
        React.createElement("input", {type: "submit", value: "Post"})
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
        this.props.children.toString()
      )
    );
  }
});

React.render(
  React.createElement(CommentBox, {url: "comments.json", pollInterval: 2000}),
  document.getElementById('content')
);
