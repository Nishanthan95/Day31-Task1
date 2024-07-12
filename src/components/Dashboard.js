import React, { useState } from 'react';
import BookForm from './BookForm';
import AuthorForm from './AuthorForm';
import BookList from './BookList';
import AuthorList from './AuthorList';

//manage book and authors
const Dashboard = () => {
  //state to manage the books and author
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  //state to manage currently selected book and author for editing
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
//handle book form submission
  const handleBookSubmit = (book) => {
    if (selectedBook !== null) {
      // If editing an existing book, update the book in the list
      const updatedBooks = books.map((b, index) =>
        index === selectedBook ? book : b
      );
      setBooks(updatedBooks);
      setSelectedBook(null);
    } else {
      // If adding a new book, append it to the list
      setBooks([...books, book]);
    }
  };

   // Handle author form submission
  const handleAuthorSubmit = (author) => {
    if (selectedAuthor !== null) {
      // If editing an existing author, update the author in the list
      const updatedAuthors = authors.map((a, index) =>
        index === selectedAuthor ? author : a
      );
      setAuthors(updatedAuthors);
      setSelectedAuthor(null);
    } else {
      // If adding a new author, append them to the list
      setAuthors([...authors, author]);
    }
  };
  // Handle edit book action
  const handleBookEdit = (index) => {
    setSelectedBook(index);
  };
// Handle delete book action
  const handleBookDelete = (index) => {
    const newBooks = books.filter((_, i) => i !== index);
    setBooks(newBooks);
  };
  // Handle edit author action
  const handleAuthorEdit = (index) => {
    setSelectedAuthor(index);
  };

  const handleAuthorDelete = (index) => {
    const newAuthors = authors.filter((_, i) => i !== index);
    setAuthors(newAuthors);
  };

  return (
    <div>
      <h1>Library Management Dashboard</h1>
      <BookForm
        onSubmit={handleBookSubmit}
        initialValues={selectedBook !== null ? books[selectedBook] : null}
      />
      <BookList
        books={books}
        onEdit={handleBookEdit}
        onDelete={handleBookDelete}
      />
      <AuthorForm
        onSubmit={handleAuthorSubmit}
        initialValues={selectedAuthor !== null ? authors[selectedAuthor] : null}
      />
      <AuthorList
        authors={authors}
        onEdit={handleAuthorEdit}
        onDelete={handleAuthorDelete}
      />
    </div>
  );
};

export default Dashboard;
