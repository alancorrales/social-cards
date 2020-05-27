import React from 'react';
import './App.css';
import Posts from './posts/posts';
import faker from 'faker';
import { joinNames } from './utils/utils';

class App extends React.Component {

  state = {
    posts: [
      {
        profileName: faker.company.companyName(),
        profileAccount: joinNames(`@${faker.company.companyName()}`),
        profileAvatar: faker.image.avatar(),
        authorAccount: joinNames(`@${faker.name.findName()}`),
        date: faker.date.recent().toDateString().split(new Date().getFullYear().toString())[0],
        text: faker.lorem.sentences(),
        card: {
          image: `${process.env.PUBLIC_URL}/images/image${1}.jpg`,
          title: faker.company.catchPhraseDescriptor(),
          description: faker.company.catchPhrase(),
          url: faker.internet.url()
        },
        comments: faker.random.number(100),
        shares: faker.random.number(50),
        likes: faker.random.number(300)
      }
    ]
  }

  render() {
    return (
      <Posts width={600} posts={this.state.posts} />
    );
  }
}

export default App;
