import React, { Component } from 'react'
import Comment from './Comment'

class App extends Component {

  newId
  newPosted
  newBody
  newTitle

  constructor() {
    super();

    this.state = {
      flag: true,
      dataCards: [
        {
          id: 1, posted: "Jyothsna",
          body: "Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins",
          title: "BootStrap",
          comments: [
            {
              id: 100,
              txt: "Hey nice work, loved it!",
              commentedBy: "Jay"
            },
            {
              id: 101,
              txt: "Trying to add comments !",
              commentedBy: "Deep"
            }
          ]
        },
        {
          id: 2, posted: "Hritika",
          body: "The next generation of our icon library + toolkit is coming with more icons, more styles, more services, and more awesome. Pre-order today and get a special price and early access!",
          title: "Font Awesome",
          comments: [
            {
              id: 102,
              txt: "Done with work ?",
              commentedBy: "Sri"
            },
            {
              id: 103,
              txt: "Doubts cleared ?",
              commentedBy: "Niharika"
            }
          ]
        }
      ]
    }
  }

  getCards() {
    const dataCards = this.state.dataCards.map(
      (card, index) =>
        <div className="card mb-2" key={card.id}>
          <div className="card-body" >
            <div className="d-flex justify-content-between">
              <h5 className="card-title text-primary font-weight-bold">
                {card.title}
              </h5>
              <button type="button" className="btn btn-link " onClick={() => this.deleteCard(index)}>
                <i className="far fa-times-circle text-danger">
                </i>
              </button>
            </div>
            <hr></hr>
            <p className="card-text font-italic">{card.body}</p>
            <footer className="blockquote-footer text-muted text-right"> <cite title="Source Title">{card.posted}</cite></footer>

            <Comment comments={card.comments} postId={card.id} handleDeleteComment={(comments, postId) => this.handleDeleteComment(comments, postId)} />

          </div>
        </div>
    )
    return dataCards
  }

  addCard() {
    var card = {
      id: this.state.dataCards.length + 1,
      posted: this.newPosted.value,
      body: this.newBody.value,
      title: this.newTitle.value,
      comments: []
    }
    var list = this.state.dataCards

    list.push(card)
    this.setState({
      dataCards: list, flag: true
    })

    this.newPosted.value = ''
    this.newBody.value = ''
    this.newTitle.value = ''
  }

  deleteCard(index) {
    var list = this.state.dataCards
    list.splice(index, 1)
    this.setState({
      details: list
    })
  }

  buttonCondition() {
    this.setState({
      flag: (this.newPosted.value === '' || this.newBody.value === '' || this.newTitle.value === '') ? true : false
    })

  }

  handleDeleteComment(comments, postId) {
    var posts = this.state.dataCards

    posts.forEach(post => {
      if (post.postId === postId)
        post.comments = comments
    })

    this.setState({ dataCards: posts })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron py-3 my-4">
          <p className="display-4 text-center mb-0">Bulletin Board</p>

        </div>
        <div className=" form-group mt-2 mb-2">

          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control mb-3" placeholder="Title" id="title"
              ref={(input) => this.newTitle = input} onInput={() => this.buttonCondition()} />

            <label>Body</label>
            <textarea className="form-control mb-3" id="body" rows="3" ref={(input) => this.newBody = input} onInput={() => this.buttonCondition()} placeholder="Body"></textarea>

            <label>Posted By</label>
            <input type="text" className="form-control mb-3" id="postby" placeholder="Posted by"
              ref={(input) => this.newPosted = input} onInput={() => this.buttonCondition()} />

            <button className="btn btn-primary" onClick={() => this.addCard()} disabled={this.state.flag}>
              Add Post
          </button>
            <hr />
          </div>
          {this.getCards()}
        </div>
      </div>
    );
  }
}

export default App;