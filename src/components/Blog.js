import React, { Component } from 'react';
import SubMenu from './SubMenu.js'

class Blog extends Component {
  render() {
    return (
      <div className="blogPosition">
      <SubMenu />
        <iframe id="blog"
          title="Blog"
          width="100%"
          height="1000"
          src="https://52.60.84.148/">
        </iframe>
      </div>
    );
  }
}

export default Blog;
