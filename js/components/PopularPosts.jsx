'use strict'

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <aside>
        <h3>Popular Articles</h3>
        <a href="link to article 1">Article 1</a>
        <a href="link to article 2">Article 2</a>
        <a href="link to article 3">Article 3</a>
      </aside>
    );
  }
});
