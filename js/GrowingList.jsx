var React = require('react');

var GrowingListItem = React.createClass({
  render: function () {
    return (
      <li onClick={this.props.addListItem}>Item {this.props.num}</li>
    );
  }
});

var GrowingList = React.createClass({
  addListItem: function () {
    var newItem = {num: this.state.counter};
    this.state.items.push(newItem);
    // Shuffle the array
    this.state.items.sort(function () {
      return Math.random();
    });
    this.setState({
      items: this.state.items,
      counter: this.state.counter + 1
    });
  },
  getInitialState: function () {
    return {
      counter: 2,
      items: [{num: 1}]
    }
  },
  render: function () {
    var boundAddFunction = this.addListItem.bind(this);
    var itemElements = this.state.items.map(function (item) {
      return <GrowingListItem num={item.num} addListItem={boundAddFunction} />;
    });
    return (
      <ul>{itemElements}</ul>
    );
  }
});

module.exports = GrowingList;
