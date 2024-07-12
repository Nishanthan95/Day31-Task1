import React from 'react';
//array of book objects
const BookList = ({ books, onEdit, onDelete }) => (
  <div>
    <h2>Books</h2>
    <ul>
      {/* Iterate over the books array and render the  book */}
      {books.map((book, index) => (
        <li key={index}>
          {book.title} by {book.author} (ISBN: {book.isbn}, Published: {book.publicationDate})
          <button onClick={() => onEdit(index)}>Edit</button>
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default BookList;
