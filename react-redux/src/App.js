import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/Postform';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
        <div className="jumbotron py-3 my-4">
          <p className="mb-0 display-4 text-center">Bulletin Board</p>
        </div>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider >
    );
  }
}

export default App;
