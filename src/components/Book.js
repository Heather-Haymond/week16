import React, { useState, useEffect } from 'react';
export function Book() {
    const [books, setBooks] = useState([]);
    // const [cart, setCart] = useState([]);
    const [bookName, setBookName] = useState ('')
    // useEffect to fetch books from an external API and set them to the state
    useEffect(() => {
      fetch('https://642725c4161067a83bf6687e.mockapi.io/Books')
        .then(response => response.json())
        .then(data => setBooks(data))
        .catch(error => alert(error));
    }, []);
  
    // function to add a book to the cart
    // const handleAddToCart = book => {
    //   setCart(prevCart => [...prevCart, book]);
    // };
    // function to add a review for a book
   
  // function to delete 
  const handleDelete = id => {
    fetch('https://642725c4161067a83bf6687e.mockapi.io/Books')
    setBooks(prevBooks => prevBooks.filter(p => p.id !== id));
  };
  //function that adds btn
  const handleSubmit = async e => {
    e.preventDefault();
    const newBooks = {
      title: bookName

    };
    const response = await fetch ('https://642725c4161067a83bf6687e.mockapi.io/Books',{
    method:"POST", 
    headers: {
    "Content-Type": "application/json",
},
body: JSON.stringify(newBooks),
})
    const createdBook = await response.json()
    //spread operater to st values of books
    setBooks(prevBooks => [...prevBooks, createdBook]);
    setBookName('');
  };

    return (
        <div>
        <h1>Book</h1>
        <form onSubmit={handleSubmit}>
           <label>
             Add a new Book:
             <input type="text" value={bookName} onChange={e => setBookName(e.target.value)} />
             </label>
             <button type="submit">Add</button>
             </form>
        <ul>
          {books.map((book) => ( //iterates
            <li key={book.id}>
            <img src={book.coverImage} alt={book.title} />
            <h2>{book.title}</h2>
            <p>by {book.Author}</p>
            <p>Publisher: {book.Publisher}</p> 
            <button onClick={() => handleDelete(book.id)}>Delete</button>  
          </li>
          ))}
        </ul>
      </div>
    )
}