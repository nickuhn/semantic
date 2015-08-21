'use strict'

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <article>
        <h2>{this.props.post.headline}</h2>
        <img src={this.props.post.img} alt="post image" />
        <p>{this.props.post.author}</p>
      </article>
    );
  }
});
