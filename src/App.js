import React from 'react';
import './App.css';
import Posts from './posts/posts';
import { generatePost } from './utils/utils'


class App extends React.Component {

  state = {
    posts: []
  }

  componentDidMount() {
    this.setState(state => {
      let posts = [];

      for (let i = 0; i < 10; i++) {
        posts.push(generatePost(i + 1));
      }

      return {
        posts
      };
    })
  }

  render() {
    return (
      <Posts width={600} posts={this.state.posts} />
    );
  }
}

export default App;
