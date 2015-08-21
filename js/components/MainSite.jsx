'use strict'

var React = require('react');
var Header = require('./Header.jsx');
var PopularPosts = require('./PopularPosts.jsx');
var PostList = require('./PostList.jsx');
var Footer = require('./Footer.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <main>
        <Header />
        <PopularPosts />
        <PostList />
        <Footer />
      </main>
    );
  }
});
