import React from "react";
import { Table,Button } from 'reactstrap';
import PropTypes from 'prop-types';
// import { Redirect }  from 'react-router';
// import BuyNow from '../buynow/buy-now';
Table.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  size: PropTypes.string,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  striped: PropTypes.bool,
  dark: PropTypes.bool,
  hover: PropTypes.bool,
  responsive: PropTypes.bool
  };



// stateless method that returns jsx that shows a unordered list of books for each line
// props contains the book array that was sent from App.js. App.js contains the books array imported from data/books.js
const bookList = (props) => {

  function buynow(){
    alert('Buy the book');
    
  }

  // variable that is created using the map function on the books array to return a new array.
  // this array contains jsx li elements containing all of the book properties
  const bookLines = props.books.map(book => (

    <tr key={book.isbn} >
      <th scope="row">{book.isbn}</th>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td data={book} > <Button color="primary"   onClick={buynow} >Buy now</Button></td>
    </tr>

    // <li key={book.isbn}>
    //   <strong>{book.title}</strong>, {book.author}
    // </li>
  ));

  // using the single curly braces syntax, we are able to return the bookLines variable within an ul jsx element
  return <tbody>{bookLines}</tbody>;
};

export default bookList;
