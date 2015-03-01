var React = require('react');

var Profile = React.createClass({displayName: "Profile",
  render: function() {
    return (
      React.createElement("div", {className: "Bio"}, 
          React.createElement("p", {className: "Bio-text"}, this.props.text)
      )
    )
  }
});

React.renderComponent(
  React.createElement(Profile, {
    text: "My name is Simon. I make websites"}
  ),
  document.body
);