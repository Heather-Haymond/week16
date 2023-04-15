import React, { useState, useEffect } from 'react';
export function Cart() {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
    // useEffect to fetch books from an external API and set them to the state
  useEffect(() => {
    fetch('https://642725c4161067a83bf6687e.mockapi.io')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error(error));
  }, []);
    // const obj = useOutletContext()
    // function to remove a book from the cart
  const handleRemoveFromCart = book => {
    setCart(prevCart => prevCart.filter(b => b.id !== book.id));
  };

  // function to add a book to the cart
  const handleAddToCart = book => {
    setCart(prevCart => [...prevCart, book]);
  };
    return (
        <>
   
     {/* Cart component */}
     <h2>Cart:</h2>
     <ul>
       {cart.map(book => (
         <li key={book.id}>
           <span>{book.title} by {book.author} (${book.price})</span>
           <button onClick={() => handleRemoveFromCart(book)}>Remove from cart</button>
         </li>
           ))}
     </ul>
     </>
   
    )
}