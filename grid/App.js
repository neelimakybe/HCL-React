import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      gridData: [[{ value: "", flag: false }, { value: "", flag: false }, { value: "", flag: false }], [{ value: "", flag: false }, { value: "", flag: false }, { value: "", flag: false }], [{ value: "", flag: false }, { value: "", flag: false }, { value: "", flag: false }]],
      playerNumber: 1
    }
  }

  gridClicked(i, j) {
    var localGridData
    localGridData = this.state.gridData

    if (this.state.playerNumber === 1) {
      this.setState({ playerNumber: 2 })
      localGridData[i][j] = { value: "X", flag: true }
    }

    else if (this.state.playerNumber === 2) {
      this.setState({ playerNumber: 1 })
      localGridData[i][j] = { value: "O", flag: true }
    }
    this.setState({ gridData: localGridData }, () => this.calculateResult())
  }

  displayInnerGrid(data, i) {
    const innerGridUI = data.map((innerData, index) =>
      <td className="text-center" key={index}>
        <button className="btn btn-block" onClick={() => this.gridClicked(i, index)} disabled={this.state.gridData[i][index].flag}>
          <i className={(data[index].value === "X") ? "fas fa-times text-success" : (data[index].value === "O") ? "far fa-circle text-danger" : ""}></i>
        </button>
      </td>
    )
    return innerGridUI
  }

  displayGrid() {
    const gridUI = this.state.gridData.map((data, index) =>
      <tr className="" key={index}>
        {
          this.displayInnerGrid(data, index)
        }
      </tr>
    )
    return gridUI
  }

  calculateResult() {
 
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron py-3 my-4">
          <p className="display-4 text-center mb-0">Tic Tac Toe</p>
        </div>

        <p className="lead">Player {this.state.playerNumber} to play</p>

        <table className="table table-bordered">
          <tbody>
            {this.displayGrid()}
          </tbody>
        </table>

      </div>
    );
  }
}
export default App;