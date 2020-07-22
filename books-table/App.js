import React, { Component } from 'react';

class App extends Component {

  newId
  newName
  newPrice
  idFlag: boolean
  nameFlag: boolean
  priceFlag: boolean

  constructor() {
    super();
    this.state = {
      buttonFlag: true,
      idIcon: "fas fa-sort",
      nameIcon: "fas fa-sort",
      priceIcon: "fas fa-sort",
      books: [
        { id: 100, name: "Python", price: "500" },
        { id: 300, name: "Html", price: "100" },
        { id: 200, name: "Node JS", price: "350" },
      ]
    };
  }

  getBooks() {
    const books = this.state.books.map((book, index) =>
      <tr key={book.id}>
        <th scope="row">{index + 1}</th>
        <td>{book.id}</td>
        <td>{book.name}</td>
        <td>{book.price}</td>
        <td> <button className="btn btn-link" onClick=
          {() => this.deleteBook(index)}>
          <i className="fas fa-times text-danger"></i>
        </button>
        </td>
      </tr>
    )
    return books
  }

  addBook() {

    var newBook = {
      id: this.newId.value,
      name: this.newName.value,
      price: this.newPrice.value
    }
    var list = this.state.books

    list.push(newBook)
    this.setState({ books: list, buttonFlag: true });
    this.newId.value = '';
    this.newName.value = '';
    this.newPrice.value = '';
  }

  textChanged() {
    this.setState({
      buttonFlag: (this.newId.value === '' || this.newName.value === '' || this.newPrice.value === '') ? true : false
    })
  }

  deleteBook(index) {
    var list = this.state.books;
    list.splice(index, 1)
    this.setState(
      {
        books: list
      });
  }

  sortById() {
    var localBooks = this.state.books

    if (this.idFlag === undefined)
      this.idFlag = true

    else if (this.idFlag !== undefined)
      this.idFlag = !this.idFlag

    if (this.idFlag) { 
      localBooks.sort((a, b) => { return a.id - b.id })
      this.setState({ idIcon: "fas fa-sort-up" })
    }

    else if (!this.idFlag) {
      localBooks.sort((a, b) => { return b.id - a.id })
      this.setState({ idIcon: "fas fa-sort-down" })
    }
    this.setState({ books: localBooks, nameIcon: "fas fa-sort", priceIcon: "fas fa-sort" })
  }

  sortByName() {
    var localBooks = this.state.books

    if (this.nameFlag === undefined)
      this.nameFlag = true

    else if (this.nameFlag !== undefined)
      this.nameFlag = !this.nameFlag

    if (this.nameFlag) {
      localBooks.sort((a, b) => { return a.name > b.name })
      this.setState({ nameIcon: "fas fa-sort-up" })
    }

    else if (!this.nameFlag) {
      localBooks.sort((a, b) => { return b.name > a.name })
      this.setState({ nameIcon: "fas fa-sort-down" })
    }

    this.setState({ books: localBooks, idIcon: "fas fa-sort", priceIcon: "fas fa-sort" })
  }

  sortByPrice() {
    var localBooks = this.state.books

    if (this.priceFlag === undefined)
      this.priceFlag = true

    else if (this.priceFlag !== undefined)
      this.priceFlag = !this.priceFlag

    if (this.priceFlag) { // asc
      localBooks.sort((a, b) => { return a.price - b.price })
      this.setState({ priceIcon: "fas fa-sort-up" })
    }

    else if (!this.priceFlag) {
      localBooks.sort((a, b) => { return b.price - a.price })
      this.setState({ priceIcon: "fas fa-sort-down" })
    }
    this.setState({ books: localBooks, idIcon: "fas fa-sort", nameIcon: "fas fa-sort" })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron py-3 my-4">
          <p className="display-4 text-center mb-0">Book Store</p>
        </div>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">
                <button className="btn btn-link p-0" onClick={() => this.sortById()}>
                  <span className="mr-2">Id</span>
                  <i className={this.state.idIcon}></i>
                </button>
              </th>
              <th scope="col">
                <button className="btn btn-link p-0" onClick={() => this.sortByName()}>
                  <span className="mr-2">Name</span>
                  <i className={this.state.nameIcon}></i>
                </button>
              </th>
              <th scope="col">
                <button className="btn btn-link p-0" onClick={() => this.sortByPrice()}>
                  <span className="mr-2">Price</span>
                  <i className={this.state.priceIcon}></i>
                </button></th>

              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.getBooks()}
          </tbody>
        </table>

        <div className="d-flex mb-3">
          <input type="text" className="form-control mx-1" placeholder="Enter new Id"
            ref={(input) => { this.newId = input }} onInput={() => this.textChanged()} />
          <input type="text" className="form-control mx-1" placeholder="Enter new Name"
            ref={(input1) => this.newName = input1} onInput={() => this.textChanged()} />
          <input type="text" className="form-control mx-1" placeholder="Enter new Price"
            ref={(input2) => this.newPrice = input2} onInput={() => this.textChanged()} />

          <button className="btn btn-primary mr-2" onClick={() => this.addBook()} disabled={this.state.buttonFlag} >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    );
  }
}
export default App;