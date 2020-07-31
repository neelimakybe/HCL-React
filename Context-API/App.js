import React, { Component } from 'react';
import Item from './Item';

export const MyContext = React.createContext(); // Store

class App extends Component {

  constructor(){
    super()
    this.state = {
      name: "Tea",
      price: 20,
      qty: 1
    }
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        changeQty: (newQty)=> this.setState({qty: newQty})
      }}>
        <div className="container">
          <Item />
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;