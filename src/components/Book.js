import React, { useState, useEffect } from 'react';
import  Button  from 'react-bootstrap/Button';
import  { Card }  from 'react-bootstrap';
import { Row, Col, Form } from 'react-bootstrap';

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
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="bookName">
              <Form.Label>Add a new Book:</Form.Label>
              <Form.Control type="text" value={bookName} onChange={e => setBookName(e.target.value)} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="bookAuthor">
              <Form.Label>Author:</Form.Label>
              <Form.Control type="text" value={bookAuthor} onChange={e => setBookAuthor(e.target.value)} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="bookPublisher">
              <Form.Label>Publisher:</Form.Label>
              <Form.Control type="text" value={bookPublisher} onChange={e => setBookPublisher(e.target.value)} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="bookCoverImage">
              <Form.Label>Cover Image URL:</Form.Label>
              <Form.Control type="text" value={bookCoverImage} onChange={e => setBookCoverImage(e.target.value)} />
            </Form.Group>
          </Col>
          <Col>
            <Button type="submit" variant="primary">add</Button>
          </Col>
        </Row>
      </Form>
      <Row>
        {books.reverse().map((book) => (
          <Col key={book.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img src={book.CoverImage} alt={book.Title} />
              <Card.Body>
                <Card.Title>{book.Title}</Card.Title>
                <Card.Text>by {book.Author}</Card.Text>
                <Card.Text>Publisher: {book.Publisher}</Card.Text>
                <Button variant="danger" onClick={() => handleDelete(book.id)}>Delete</Button>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="updatedBookName">
                    <Form.Label>Update Book:</Form.Label>
                    <Form.Control type="text" value={updatedBookName} onChange={e => setUpdatedBookName(e.target.value)} />
                  </Form.Group>
                  <Form.Group controlId="bookAuthor">
                    <Form.Label>Author:</Form.Label>
                    <Form.Control type="text" value={bookAuthor} onChange={e => setBookAuthor(e.target.value)} />
                  </Form.Group>
                  <Form.Group controlId="bookPublisher">
                    <Form.Label>Publisher:</Form.Label>
                    <Form.Control type="text" value={bookPublisher} onChange={e => setBookPublisher(e.target.value)} />
                  </Form.Group>
                  <Form.Group controlId="updatedBookCoverImage">
                    <Form.Label>Cover Image URL:</Form.Label>
                    <Form.Control type="text" value={updatedBookCoverImage} onChange={e => setUpdatedBookCoverImage(e.target.value)} />
                  </Form.Group>
                  <Button variant="warning" onClick={() => handleUpdate(book.id, updatedBookName, updatedBookCoverImage)}>Edit</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    )
}
        
