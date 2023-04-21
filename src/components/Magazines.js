import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

import { useParams } from 'react-router-dom';

//magazine component
export function Magazines() {
    // state variables to store data and input values
    const [magazines, setMagazines] = useState([]);
    // const [cart, setCart] = useState([]);
    const [magazineName, setMagazineName] = useState ('')
    const [MagazineAuthor, setMagazineAuthor] = useState ('')
    const [magazinePublisher, setMagazinePublisher] = useState ('')
    const [magazineCoverImage, setMagazineCoverImage] = useState ('')
    const [updatedMagazineName, setUpdatedMagazineName] = useState ('')
    const [updatedMagazineCoverImage, setUpdatedMagazineCoverImage] = useState ('')
    // useEffect to fetch magazines from an external API and set them to the state
    useEffect(() => {
        getMagazines()
    }, []);
    //function to fetch from the API
    const getMagazines = async() =>{
    await fetch('https://642725c4161067a83bf6687e.mockapi.io/Magazines')
        .then(response => response.json())
        .then(data => {
            let sortedData=data.reverse() //reverse the data array
            setMagazines(sortedData) //set data to the state
        })
        .catch(error => alert(error));
    }
  
    // function to add a book to the cart
    // const handleAddToCart = magazine => {
    //   setCart(prevCart => [...prevCart, magazine]);
    // };
  // function to delete 
  const handleDelete = async (id) => {
    console.log("deletingMagazine...", id)
   const response = await fetch(`https://642725c4161067a83bf6687e.mockapi.io/Magazines/${id}`,{
    method:"DELETE",
    headers: {
    "content-Type": "application/json"
   },
})
getMagazines()  // set book to state
    // setMagazines(prevMagazines => prevMagazines.filter(p => p.id !== id));
  };
  //function that adds magazine to the API
  const handleSubmit = async e => {
    console.log ("posting a new magazine...")
    e.preventDefault();
    const newMagazines = {
        Title: magazineName,
        Author: MagazineAuthor,
        Publisher: magazinePublisher,
        CoverImage: magazineCoverImage,

    };
    const response = await fetch ("https://642725c4161067a83bf6687e.mockapi.io/Magazines",{
        method:"POST", 
        headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMagazines),
    })

    
    // const createdBook = await response.json()
    //spread operater to st values of books
    // setBooks(prevBooks => [...prevBooks, createdBook]);
    
    // reset input value for:
    setMagazineName('');
    setMagazineAuthor('');
    setMagazinePublisher('');
    setMagazineCoverImage('');
    getMagazines('') // call getMagazines function to update the state
    };
    // function to update a book in the API
    const handleUpdate = async (id, name, URL) => {
    console.log("updated magazine...", id, name, URL)
    const newMagazines = {
    Title: name,
    Author: MagazineAuthor,
    Publisher: magazinePublisher,
    CoverImage: URL,
    };
    const response = await fetch(`https://642725c4161067a83bf6687e.mockapi.io/Magazines/${id}`, { //sends a PUT request to the API to update the magazine data
    method: 'PUT', //specifies that this is a PUT request
    headers: { //sets the headers for the request as well as data sent to JSON 
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMagazines), //converts the new book data into a JSON string and sets it as the body of the request
    });
    getMagazines() //calls the getBooks function to update new data
    };
//     const createdMagazine = await response.json()
    
//     setMagazines(prevMagazines => [...prevMagazines, createdMagazine]);
//     setMagazineName('');
//   };

    // function to remove a book from the cart
    // const handleRemoveFromCart = magazine => {
    //   setCart(prevCart => prevCart.filter(b => b.id !== magazine.id));
    // };
    // const { id } = useParams()
    // const obj = useOutletContext()
    return (
        <div>
        <h1>Magazine</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Add a new Magazine:
            <input type="text" value={magazineName} onChange={e => setMagazineName(e.target.value)} />
          </label>
          <label>
Cover Image URL:
            <input type="text" value={magazineCoverImage} onChange={e => setMagazineCoverImage(e.target.value)} /> sets up an input field for the magazine image URL and updates the bookCoverImage state when the input changes
          </label>
          <Button variant="warning" onClick={() => handleUpdate(magazines.id,updatedMagazineName,updatedMagazineCoverImage)}>Edit</Button> 
        </form>
        <ul>
          {magazines.reverse().map((magazine) => ( //iterates
            <li key={magazine.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img src={magazine.CoverImage} alt={magazine.Title} /> //displays the book cover image
            <h2>{magazine.Title}</h2>
            <p>by {magazine.Author}</p>
            <p>Publisher: {magazine.Publisher}</p> 
            <Button variant="danger" onClick={() => handleDelete(magazine.id)}>Delete</Button> {/*a button to delete the current book*/}
            <form onSubmit={handleSubmit}>//form with onSubmit handler that updates book data
            <label>
                Updade a Magazine:
                <input type="text" value={updatedMagazineName} onChange={e => setUpdatedMagazineName(e.target.value)} />
                cover Image URL:
                <input type="text" value={updatedMagazineCoverImage} onChange={e => setUpdatedMagazineCoverImage(e.target.value)} />
                </label>
                <Button variant="warning" onClick={() => handleUpdate(magazine.id,updatedMagazineName,updatedMagazineCoverImage)}>Edit</Button> {/*a button to update the current book*/}
                </form>
                </Card>
          </li>
          ))}
        </ul>
      </div>
    )
}