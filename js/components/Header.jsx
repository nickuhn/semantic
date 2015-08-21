'use strict'

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <header>
        <nav>
          <ul>
            <li><a href="link to other blog1">Blog1</a></li>
            <li><a href="link to other blog2">Blog2</a></li>
            <li><a href="link to other blog3">Blog3</a></li>
          </ul>
          <h1>Reactnik</h1>
          <button>Log In</button>
        </nav>
      </header>
    );
  }
});
