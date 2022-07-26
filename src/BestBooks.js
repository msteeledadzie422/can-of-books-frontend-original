import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

async fetchbooks() {
  let url = 'https://frazer-can-of-books.herokuapp.com/books';
  let response = await axios.get(url);
  this.setState({
    books: response.data
  })
}

componentDidMount() {
  this.fetchbooks()
}

  render() {
    console.log(this.state.books)


    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Carousel>
            {this.state.books.map(element => 
              <Carousel.Item>
              <img src='https://place-hold.it/2000x400/black/white' alt='sample background'></img>
              <Carousel.Caption>
                <h2>{element.title}</h2>
                <p>{element.description}</p>
                <p>{element.status}</p>
              </Carousel.Caption>
            </Carousel.Item> 
              )}
          </Carousel>
        ) : (
          <h3>No Books Found :</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
