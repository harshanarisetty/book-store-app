import React, { Component } from "react";
import "./App.css";
import JSAlpharetta from "../assets/JSAlpharetta.jpg";
import { Table, Input, Button, InputGroup, InputGroupAddon, } from 'reactstrap';
import books from "../data/books";
import BookList from "../components/book-list/book-list";
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {

  state = {
    // current state for list of books, new book title, new book isbn, and new book author
    newBookTitle: "",
    newBookIsbn: "",
    newBookAuthor: "",
    books: books
  };

  // method to handle the change of text within textbox for new book title
  handleChangeNewBookTitleTextBox = e => {
    this.setState({
      newBookTitle: e.target.value
    });
  };

  // method to handle the change of text within textbox for new book isbn
  handleChangeNewBookIsbnTextBox = e => {
    this.setState({
      newBookIsbn: e.target.value
    });
  };

  // method to handle the change of text within textbox for new book author
  handleChangeNewBookAuthorTextBox = e => {
    this.setState({
      newBookAuthor: e.target.value
    });
  };

  // handle clicking the add book button
  handleOnSubmit = () => {

    this.addBook();
  };

  // method to handle event created by clicking the 'add book' button to add book to current list of books in data/books.js
  addBook = () => {
    // create new book object from current state of isbn, title, and author
    const book = {
      isbn: this.state.newBookIsbn,
      title: this.state.newBookTitle,
      author: this.state.newBookAuthor
    };

    if (book.isbn !== '' && book.title !== '' && book.author !== '')
      books.push(book);
    else
      alert("All fields are required");

    // clear out current values for author, isbn, and title and set books array to data/books.js with the new values added
    this.setState({
      books: books,
      newBookAuthor: "",
      newBookIsbn: "",
      newBookTitle: ""
    });
  };

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={JSAlpharetta} height="100" width="150" alt="jsAlpharetta" />
          <h1 className="App-title">AlpharettaJS Bookstore</h1>
        </header>
        <h2>Add New Book</h2>
        <div className="new-book-form">
          <InputGroup>
            <InputGroupAddon addonType="prepend">  #  </InputGroupAddon>
            <Input
            placeholder='ISBN'
              className='input-form'
              value={this.state.newBookIsbn}
              onChange={this.handleChangeNewBookIsbnTextBox}
            />
          </InputGroup>
          
      <InputGroup>
            <InputGroupAddon addonType="prepend"><span role="img">&#128214;</span></InputGroupAddon>
            <Input
              className='input-form'
              placeholder="Title "
              value={this.state.newBookTitle}
              onChange={this.handleChangeNewBookTitleTextBox}
            />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend"><span role="img">&#9997;</span></InputGroupAddon>
          <Input
            className='input-form'
            placeholder="Author "
            value={this.state.newBookAuthor}
            onChange={this.handleChangeNewBookAuthorTextBox}
          />
          </InputGroup>
          <Button color="success" onClick={this.handleOnSubmit} className="form-button">Add Book</Button>
        </div>
        <h2>Book List</h2>
        <div className='table-class'>
          <Table striped >
            <thead>
              <tr>
                <th>ISBN# </th>
                <th>Book Name</th>
                <th>Author</th>
                <th>Link to Buy</th>
              </tr>
            </thead>

            <BookList books={books} />

          </Table>
        </div>

      </div>
    );
  }
}


export default App;
