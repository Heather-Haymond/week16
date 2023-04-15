import React, { useState, useEffect } from 'react';

function App() {
  // Initialize state variables with the `useState` hook
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  // Use the `useEffect` hook to fetch the initial list of books from an API endpoint
  useEffect(() => {
    fetch('https://example.com/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error(error));
  }, []);

  // Define a function to remove a book from the list
  const handleDelete = id => {
    setBooks(prevBooks => prevBooks.filter(b => b.id !== id));
  };

  // Define a function to add a new book to the list
  const handleSubmit = e => {
    e.preventDefault();
    const newBook = {
      title: title,
      author: author
    };
    setBooks(prevBooks => [...prevBooks, newBook]);
    setTitle('');
    setAuthor('');
  };

  // Render a form to add a new book and a list of books with delete buttons
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label>
          Author:
          <input type="text" value={author} onChange={e => setAuthor(e.target.value)} />
        </label>
        <button type="submit">Add</button>
      </form>
      <ul>
        {books.map(b => (
          <li key={b.id}>
            <strong>{b.title} by {b.author}</strong>
            <button onClick={() => handleDelete(b.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
