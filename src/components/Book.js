import React, { useState, useEffect } from 'react';
import  Button  from 'react-bootstrap/Button';
import  { Card }  from 'react-bootstrap';

export function Book() {
    const [books, setBooks] = useState([]);
    // const [cart, setCart] = useState([]);
    const [bookName, setBookName] = useState ('')
    const [bookAuthor, setBookAuthor] = useState ('')
    const [bookPublisher, setBookPublisher] = useState ('')
    const [bookCoverImage, setBookCoverImage] = useState ('')
    const [updatedBookName, setUpdatedBookName] = useState ('')
    const [updatedBookCoverImage, setUpdatedBookCoverImage] = useState ('')
    // useEffect to fetch books from an external API and set them to the state
    useEffect(() => {
      getBooks()
    }, []);

  const getBooks = async() =>{
   await fetch('https://642725c4161067a83bf6687e.mockapi.io/Books')
        .then(response => response.json())
        .then(data => { 
            let sortedData=data.reverse()
            setBooks(sortedData)
        })
        .catch(error => alert(error));
  }
    // function to add a book to the cart
    // const handleAddToCart = book => {
    //   setCart(prevCart => [...prevCart, book]);
    // };
    // function to add a review for a book
   
  // function to delete 
  const handleDelete = async (id) => {
    console.log("deletingbook...", id)
    const response = await fetch (`https://642725c4161067a83bf6687e.mockapi.io/Books/${id}`,{
    method:"DELETE", 
    headers: {
    "Content-Type": "application/json",
},
})
    getBooks()
  };
  //function that adds btn
  const handleSubmit = async e => {
    console.log("posting a new book...")
    e.preventDefault();
    const newBooks = {
    Title: bookName,
    Author: bookAuthor,
    Publisher: bookPublisher,
    CoverImage: bookCoverImage,
    };
    const response = await fetch ('https://642725c4161067a83bf6687e.mockapi.io/Books',{
    method:"POST", 
    headers: {
    "Content-Type": "application/json",
},
body: JSON.stringify(newBooks),
})
    // const createdBook = await response.json()
    //spread operater to st values of books
    // setBooks(prevBooks => [...prevBooks, createdBook]);
    setBookName('');
    setBookAuthor('');
    setBookPublisher('');
    setBookCoverImage('');
    getBooks('')
  };
   // function to update a book in the API
  const handleUpdate = async (id, name, URL) => {
    console.log("updated book...", id, name, URL)
    const newBooks = {
        Title: name,
        Author: bookAuthor,
        Publisher: bookPublisher,
        CoverImage: URL,
        };
    const response = await fetch(`https://642725c4161067a83bf6687e.mockapi.io/Books/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBooks),
    });
getBooks()
  };

    return (
        <div>
        <h1>Book</h1>
        <form onSubmit={handleSubmit}>
           <label>
             Add a new Book:
             <input type="text" value={bookName} onChange={e => setBookName(e.target.value)} />
             </label>
             <label>
             Author:
             <input type="text" value={bookAuthor} onChange={e => setBookAuthor(e.target.value)} />
             </label>
             <label>
             Publisher:
             <input type="text" value={bookPublisher} onChange={e => setBookPublisher(e.target.value)} />
             </label>
             <label>
             Cover Image URL:
             <input type="text" value={bookCoverImage} onChange={e => setBookCoverImage(e.target.value)} />
             </label>
             <Button type="submit" variant="primary">add</Button>
            </form>
        <ul>
          {books.reverse().map((book) => ( //iterates
            <li key={book.id}>
                <Card style={{ width: '18rem' }}>
            <Card.Img src={book.CoverImage} alt={book.Title} />
            <h2>{book.Title}</h2>
            <p>by {book.Author}</p>
            <p>Publisher: {book.Publisher}</p> 
            <Button variant="danger" onClick={() => handleDelete(book.id)}>Delete</Button>  
            <form onSubmit={handleSubmit}>
           <label>
             Update a Book:
             <input type="text" value={updatedBookName} onChange={e => setUpdatedBookName(e.target.value)} />
             cover Image URL:
             <input type="text" value={updatedBookCoverImage} onChange={e => setUpdatedBookCoverImage(e.target.value)} />
             </label>
             <Button variant="warning" onClick={() => handleUpdate(book.id,updatedBookName,updatedBookCoverImage)}>Edit</Button>
             </form>
             </Card>
          </li>
          ))}
        </ul>
      </div>
    )
}
        
