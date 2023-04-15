import { useOutletContext, useParams } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
export function Book() {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
  
    // useEffect to fetch books from an external API and set them to the state
    useEffect(() => {
      fetch('https://642725c4161067a83bf6687e.mockapi.io')
        .then(response => response.json())
        .then(data => setBooks(data))
        .catch(error => console.error(error));
    }, []);
  
    // function to add a book to the cart
    const handleAddToCart = book => {
      setCart(prevCart => [...prevCart, book]);
    };
  
    // function to remove a book from the cart
    const handleRemoveFromCart = book => {
      setCart(prevCart => prevCart.filter(b => b.id !== book.id));
    };
    const { id } = useParams()
    // const obj = useOutletContext()
    return (
        
     <h1> Book {id} </h1> 
    // <h1>
    //     Book {id} {obj.hello}
    // </h1>
   
    )
}