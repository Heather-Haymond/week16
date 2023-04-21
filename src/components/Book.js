import React, { useState, useEffect } from 'react';
import  Button  from 'react-bootstrap/Button';
import  { Card }  from 'react-bootstrap';

// Book component
export function Book() {
    // state variables to store book data and input values
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

    // function to fetch books from the API 
  const getBooks = async() =>{
   await fetch('https://642725c4161067a83bf6687e.mockapi.io/Books')
        .then(response => response.json())
        .then(data => { 
            let sortedData=data.reverse() // reverse the data array to reverse book order
            setBooks(sortedData) // set the book data to the state
        })
        .catch(error => alert(error));
  }
    // function to add a book to the cart
    // const handleAddToCart = book => {
    //   setCart(prevCart => [...prevCart, book]);
    // };
   
  // function to delete 
  const handleDelete = async (id) => {
    console.log("deletingbook...", id)
    const response = await fetch (`https://642725c4161067a83bf6687e.mockapi.io/Books/${id}`,{
    method:"DELETE", 
    headers: {
    "Content-Type": "application/json",
},
})
    getBooks() // set the book data to the state
  };
  // function to add a new book to the API
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

    // reset input value for:
    setBookName('');
    setBookAuthor('');
    setBookPublisher('');
    setBookCoverImage('');
    getBooks('') // call getBooks function to update the state
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
    const response = await fetch(`https://642725c4161067a83bf6687e.mockapi.io/Books/${id}`, { //sends a PUT request to the API to update the book data
      method: 'PUT', //specifies that this is a PUT request
      headers: { //sets the headers for the request as well as data sent to JSON 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBooks), //converts the new book data into a JSON string and sets it as the body of the request
    });
getBooks() //calls the getBooks function to update new data
  };

    return (
        <div>
        <h1>Book</h1>
        <form onSubmit={handleSubmit}> //sets up a form with an onSubmit handler to add a new book
           <label>
             Add a new Book:
             <input type="text" value={bookName} onChange={e => setBookName(e.target.value)} />  //sets up an input field for the book name and updates the bookName state when the input changes
             </label>
             <label>
             Author:
             <input type="text" value={bookAuthor} onChange={e => setBookAuthor(e.target.value)} /> //sets up an input field for the book author and updates the bookAuthor state when the input changes
             </label>
             <label>
             Publisher:
             <input type="text" value={bookPublisher} onChange={e => setBookPublisher(e.target.value)} /> //sets up an input field for the book cover image URL and updates the bookCoverImage state when the input changes
             </label>
             <label>
             Cover Image URL:
             <input type="text" value={bookCoverImage} onChange={e => setBookCoverImage(e.target.value)} /> sets up an input field for the book cover image URL and updates the bookCoverImage state when the input changes
             </label>
             <Button type="submit" variant="primary">add</Button> {/*a button to add the new book*/}
            </form>
        <ul>
          {books.reverse().map((book) => ( //iterates over the list of books in reverse order and generates a card for each one
            <li key={book.id}>
                <Card style={{ width: '18rem' }}>
            <Card.Img src={book.CoverImage} alt={book.Title} /> //displays the book cover image
            <h2>{book.Title}</h2>
            <p>by {book.Author}</p>
            <p>Publisher: {book.Publisher}</p> 
            <Button variant="danger" onClick={() => handleDelete(book.id)}>Delete</Button>  {/*a button to delete the current book*/}
            <form onSubmit={handleSubmit}>//form with onSubmit handler that updates book data
           <label>
             Update a Book:
             <input type="text" value={updatedBookName} onChange={e => setUpdatedBookName(e.target.value)} /> // input field for updated book name and updates the updatedBookName state when the input changes
             cover Image URL:
             <input type="text" value={updatedBookCoverImage} onChange={e => setUpdatedBookCoverImage(e.target.value)} />
             </label>
             <Button variant="warning" onClick={() => handleUpdate(book.id,updatedBookName,updatedBookCoverImage)}>Edit</Button> {/*a button to update the current book*/}
             </form>
             </Card>
          </li>
          ))}
        </ul>
      </div>
    )
}
        
