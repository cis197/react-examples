define(function (require) {
  var React = require('react');
  var HelloWorld = React.createClass({
    render: function () {
      return (
        <h1>Hello {this.props.name}!</h1>
      );
    }
  });

  var LikeButton = require('jsx!./LikeButton');
  var GrowingList = require('jsx!./GrowingList');

  React.renderComponent(
    <GrowingList />,
    document.getElementById('container')
  );
});
