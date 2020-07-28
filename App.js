import React, { Component } from 'react';
import Greeter from './Greeter';

// npm i prop-types --save

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="jumbotron py-3 my-4">
          <p className="display-4 text-center mb-0">Trying to Greet !</p>
        </div>

        <Greeter msg = "Good Morning "/>

      </div>
    );
  }
}

export default App;