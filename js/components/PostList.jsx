'use strict'

var React = require('react');
var Post = require('./Post.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      posts: [
      {author: 'Tolkien', headline: 'How to get your kingship back.', img: "ringURL1" },
      {author: 'Vonnegut', headline: 'So it goes...', img: "catCraddleURL" },
      {author: 'King', headline: 'What lurks in the shadow?', img: "clownURL" },
      {author: 'Clark', headline: 'Is your childhood over?', img: "spaceshipURL" }
      ]
    }
  },

  render: function() {
    var postList = this.state.posts.map(function(post) {
      return <Post post={post} />
    });

    return (
      <main id="blog post lists">
        {postList}
        <button>More Stories:</button>
      </main>
    );
  }
});
