'use strict';

var CommentBox = React.createClass({
  displayName: 'CommentBox',

  getInitialState: function getInitialState() {
    return { data: [] };
  },
  loadCommentsFromServer: function loadCommentsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (function (data) {
        this.setState({ data: data });
      }).bind(this),
      error: (function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }).bind(this)
    });
  },
  handleCommentSubmit: function handleCommentSubmit(comment) {
    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({ data: newComments });
    console.log(newComments);
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: (function (data) {
        this.setState({ data: data });
      }).bind(this),
      error: (function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }).bind(this)
    });
  },
  componentDidMount: function componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: 'commentBox' },
      React.createElement(
        'h1',
        null,
        'Comments'
      ),
      React.createElement(CommentList, { data: this.state.data }),
      React.createElement(CommentForm, { onCommentSubmit: this.handleCommentSubmit })
    );
  }
});

var CommentList = React.createClass({
  displayName: 'CommentList',

  render: function render() {
    var commentNodes = this.props.data.map(function (comment) {
      return React.createElement(
        Comment,
        { key: comment.id, author: comment.author },
        comment.text
      );
    });
    return React.createElement(
      'div',
      { className: 'commentList' },
      commentNodes
    );
  }
});

var CommentForm = React.createClass({
  displayName: 'CommentForm',

  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    var author = this.refs.author.value.trim();
    var text = this.refs.text.value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({ author: author, text: text });
    this.refs.author.value = '';
    this.refs.text.value = '';
    return;
  },
  render: function render() {
    return React.createElement(
      'form',
      { className: 'commentForm' },
      React.createElement('input', { type: 'text', placeholder: 'Your name...', ref: 'author' }),
      React.createElement('input', { type: 'text', placeholder: 'Your Comment.. ', ref: 'text' }),
      React.createElement('input', { type: 'button', value: 'Post', onClick: this.handleSubmit })
    );
  }
});

var Comment = React.createClass({
  displayName: 'Comment',

  render: function render() {
    return React.createElement(
      'div',
      { className: 'comment' },
      React.createElement(
        'h2',
        { className: 'author' },
        this.props.author
      ),
      this.props.children
    );
  }
});

$(document).ready(function () {
  ReactDOM.render(React.createElement(CommentBox, { url: '/api/comments', pollInterval: 2000 }), document.getElementById('content'));
});