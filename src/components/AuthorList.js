import React from 'react';

//array of author objects
const AuthorList = ({ authors, onEdit, onDelete }) => (
  <div>
    <h2>Authors</h2>
    <ul>
      {/* iterate the author array and render the each author */}
      {authors.map((author, index) => (
        <li key={index}>
          {author.name} (Born: {author.birthDate})
          <p>{author.biography}</p>
          <button onClick={() => onEdit(index)}>Edit</button>
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default AuthorList;
