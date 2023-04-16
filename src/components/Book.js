import { useOutletContext, useParams } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { Alert } from "react-bootstrap";
import { ReviewList } from './ReviewList';

export function Book() {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
    const [reviews, setReviews] = useState([]);
    // useEffect to fetch books from an external API and set them to the state
    useEffect(() => {
      fetch('https://642725c4161067a83bf6687e.mockapi.io/Books')
        .then(response => response.json())
        .then(data => setBooks(data))
        .catch(error => alert(error));
    }, []);
  
    // function to add a book to the cart
    const handleAddToCart = book => {
      setCart(prevCart => [...prevCart, book]);
    };
    // function to add a review for a book
    const handleAddReview = (id, review) => {
        const updatedBooks = books.map(book => {
          if (book.id === id) {
            return { ...book, reviews: [...book.reviews, reviews] };
          } else {
            return book;
          }
        });
        setBooks(updatedBooks);
      };
  // function to delete 
  const handleDelete = id => {
    setBooks(prevBooks => prevBooks.filter(p => p.id !== id));
  };
  //function that adds btn
  const handleSubmit = e => {
    e.preventDefault();
    const newBooks = {
      Title: books
    };
    //spread operater to st values of books
    setBooks(prevBooks => [...prevBooks, newBooks]);
    setCart('');
  };

    // function to remove a book from the cart
    const handleRemoveFromCart = book => {
      setCart(prevCart => prevCart.filter(b => b.id !== book.id));
    };
    const { id } = useParams()
    // const obj = useOutletContext()
    return (
        <div>
        <h1>Book</h1>
        {/* <form onSubmit={handleSubmit}>
          <label>
            Add a new Book:
            <input type="text" value={books} onChange={e => setCart(e.target.value)} />
          </label>
          <button type="submit">Add</button>
        </form> */}
        <ul>
          {books.map((book) => ( //iterates
            <li key={book.id}>
            <img src={book.CoverImage} alt={book.Title} />
            <h2>{book.Title}</h2>
            <p>by {book.Author}</p>
            <p>Publisher: {book.Publisher}</p>
            <ReviewList reviews={book.reviews} />
            <form onSubmit={(e) => {
                    e.preventDefault();
                    handleAddReview(book.id, e.target.elements.reviews);
                    e.target.elements.reviews = '';
                  }}>
                  <label>
                    Add a review:
                    <input type="text" name="review" />
                  </label>
                  <button type="submit">Add</button>
                </form>
          </li>
          ))}
        </ul>
      </div>
    )
}