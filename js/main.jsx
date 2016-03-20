var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function () {
    return (
      <h1>Hello {this.props.name}!</h1>
    );
  }
});

var LikeButton = require('./LikeButton.jsx');
var GrowingList = require('./GrowingList.jsx');

ReactDOM.render(
  <GrowingList />,
  document.getElementById('container')
);
