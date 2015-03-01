var React = require('react');

document.addEventListener("DOMContentLoaded", function(event) {
  React.renderComponent(
    <Profile
      text="My name is Simon. I make websites"
    />,
    document.body
  );
});

var Profile = React.createClass({
  render: function() {
    return (
      <div className="Bio">
          <p className="Bio-text">{this.props.text}</p>
      </div>
    )
  }
});